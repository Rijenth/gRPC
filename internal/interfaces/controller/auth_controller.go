package controller

import (
	"context"
	"time"

	"github.com/golang-jwt/jwt/v5"
	pb "github.com/rijenth/gRPC/internal/grpc/auth"
	"github.com/rijenth/gRPC/internal/infrastructure/services"
	"github.com/rijenth/gRPC/internal/usecase"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type JWTClaims struct {
	UserID   string `json:"sub"`
	Username string `json:"name"`
	jwt.RegisteredClaims
}

type AuthController struct {
	passwordHasher *services.BcryptPasswordHasher
	usecase        *usecase.UserUsecase
	JWTsecretKey   string
	pb.UnimplementedAuthServiceServer
}

func NewAuthController(uc *usecase.UserUsecase, bcryptPasswordHasher *services.BcryptPasswordHasher, secretKey string) *AuthController {
	return &AuthController{usecase: uc, passwordHasher: bcryptPasswordHasher, JWTsecretKey: secretKey}
}

func (authController *AuthController) Login(ctx context.Context, req *pb.LoginRequest) (*pb.LoginResponse, error) {
	user, err := authController.usecase.GetUserByUsername(ctx, req.Username)

	if err != nil {
		return nil, status.Errorf(codes.PermissionDenied, err.Error())
	}

	if err := authController.passwordHasher.ComparePassword(user.Password, req.Password); err != nil {
		return nil, status.Errorf(codes.PermissionDenied, "authentication failed")
	}

	expiresIn := time.Hour
	expirationTime := time.Now().Add(expiresIn)

	claims := &JWTClaims{
		UserID:   string(user.ID),
		Username: user.Username,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(expirationTime),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString([]byte(authController.JWTsecretKey))
	if err != nil {
		return nil, status.Errorf(codes.Internal, "could not generate token: %v", err)
	}

	return &pb.LoginResponse{
		Token:     tokenString,
		ExpiresIn: int64(expiresIn.Seconds()),
	}, nil
}

func (authController *AuthController) ValidateToken(ctx context.Context, req *pb.ValidateTokenRequest) (*pb.ValidateTokenResponse, error) {
	claims := &JWTClaims{}
	token, err := jwt.ParseWithClaims(req.Token, claims, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, status.Errorf(codes.Unauthenticated, "unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(authController.JWTsecretKey), nil
	})

	if err != nil || !token.Valid {
		return &pb.ValidateTokenResponse{Valid: false}, nil
	}

	return &pb.ValidateTokenResponse{Valid: true, UserId: claims.UserID}, nil
}
