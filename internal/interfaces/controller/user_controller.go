package controller

import (
	"context"

	pb "github.com/rijenth/gRPC/internal/grpc/user"
	"google.golang.org/protobuf/types/known/timestamppb"

	"github.com/rijenth/gRPC/internal/usecase"
)

// UserController implémente les services gRPC pour l'utilisateur.
type UserController struct {
	uc *usecase.UserUsecase
	pb.UnimplementedUserServiceServer
}

func NewUserController(uc *usecase.UserUsecase) *UserController {
	return &UserController{uc: uc}
}

func (c *UserController) GetUserById(ctx context.Context, req *pb.GetUserByIdRequest) (*pb.UserResponse, error) {
	user, err := c.uc.GetUserByID(ctx, int(req.Id))
	if err != nil {
		return nil, err
	}

	var lastLogin *timestamppb.Timestamp
	if user.LastLogin != nil {
		lastLogin = timestamppb.New(*user.LastLogin)
	}

	return &pb.UserResponse{
		User: &pb.User{
			Id:             int32(user.ID),
			Username:       user.Username,
			Email:          user.Email,
			FirstName:      user.FirstName,
			LastName:       user.LastName,
			DateOfBirth:    timestamppb.New(user.DateOfBirth), // Conversion de time.Time
			Address:        user.Address,
			PhoneNumber:    user.PhoneNumber,
			CreatedAt:      timestamppb.New(user.CreatedAt), // Conversion de time.Time
			UpdatedAt:      timestamppb.New(user.UpdatedAt), // Conversion de time.Time
			LastLogin:      lastLogin,                       // Peut être nil si LastLogin n'est pas défini
			IsActive:       user.IsActive,                   // Booléen géré directement
			IsAdmin:        user.IsAdmin,                    // Booléen géré directement
			ProfilePicture: user.ProfilePicture,
			Bio:            user.Bio,
		},
	}, nil
}

// TODO: CreateUser, UpdateUser, DeleteUser.
