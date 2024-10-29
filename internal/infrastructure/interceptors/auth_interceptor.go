package interceptors

import (
	"context"
	"log"
	"strings"

	authpb "github.com/rijenth/gRPC/internal/grpc/auth"

	"github.com/golang-jwt/jwt/v5"
	"github.com/rijenth/gRPC/internal/domain"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

func UnaryServerInterceptor(JWTsecretKey string) grpc.UnaryServerInterceptor {
	return func(
		ctx context.Context,
		req any,
		info *grpc.UnaryServerInfo,
		handler grpc.UnaryHandler,
	) (any, error) {
		if info.FullMethod == authpb.AuthService_Login_FullMethodName {
			return handler(ctx, req)
		}

		meta, ok := metadata.FromIncomingContext(ctx)

		if !ok {
			return nil, status.Errorf(codes.Unauthenticated, "missing metadata from context")
		}

		authHeader, ok := meta["authorization"]
		if !ok || len(authHeader) == 0 || !strings.HasPrefix(authHeader[0], "Bearer ") {
			return nil, status.Errorf(codes.Unauthenticated, "missing authorization header")
		}

		tokenString := strings.TrimPrefix(authHeader[0], "Bearer ")

		claims := &domain.JWTClaims{}
		token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, status.Errorf(codes.Unauthenticated, "bearer token has invalid signing method")
			}
			return []byte(JWTsecretKey), nil
		})

		if err != nil || !token.Valid {
			return nil, status.Errorf(codes.Unauthenticated, "invalid token: %v", err)
		}

		resp, err := handler(ctx, req)

		if err != nil {
			log.Printf("Error processing request: %v", err)
			return nil, status.Errorf(codes.Internal, "internal server error")
		}

		return resp, nil
	}
}
