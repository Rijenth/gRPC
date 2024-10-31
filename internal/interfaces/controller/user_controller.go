package controller

import (
	"context"

	pb "github.com/rijenth/gRPC/internal/grpc/user"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/timestamppb"

	"github.com/rijenth/gRPC/internal/usecase"
)

type UserController struct {
	usecase *usecase.UserUsecase
	pb.UnimplementedUserServiceServer
}

func NewUserController(uc *usecase.UserUsecase) *UserController {
	return &UserController{usecase: uc}
}

func (c *UserController) Index(ctx context.Context, request *pb.Empty) (*pb.GetAllUsersResponse, error) {
	users, err := c.usecase.GetAllUsers(ctx)

	if err != nil {
		return nil, err
	}

	var pbUsers []*pb.User

	for _, user := range users {
		var lastLogin *timestamppb.Timestamp
		if user.LastLogin != nil {
			lastLogin = timestamppb.New(*user.LastLogin)
		}

		pbUsers = append(pbUsers, &pb.User{
			Id:             int32(user.ID),
			Username:       user.Username,
			Email:          user.Email,
			FirstName:      user.FirstName,
			LastName:       user.LastName,
			DateOfBirth:    timestamppb.New(user.DateOfBirth),
			Address:        user.Address,
			PhoneNumber:    user.PhoneNumber,
			CreatedAt:      timestamppb.New(user.CreatedAt),
			UpdatedAt:      timestamppb.New(user.UpdatedAt),
			LastLogin:      lastLogin,
			IsActive:       user.IsActive,
			IsAdmin:        user.IsAdmin,
			ProfilePicture: user.ProfilePicture,
			Bio:            user.Bio,
		})
	}

	return &pb.GetAllUsersResponse{Users: pbUsers}, nil
}

func (c *UserController) Get(ctx context.Context, request *pb.GetUserByUsername) (*pb.UserResponse, error) {
	user, err := c.usecase.GetUserByUsername(ctx, request.Username)
	if err != nil {
		return nil, err
	}

	if user == nil {
		return nil, status.Errorf(codes.NotFound, "user not found")
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
			DateOfBirth:    timestamppb.New(user.DateOfBirth),
			Address:        user.Address,
			PhoneNumber:    user.PhoneNumber,
			CreatedAt:      timestamppb.New(user.CreatedAt),
			UpdatedAt:      timestamppb.New(user.UpdatedAt),
			LastLogin:      lastLogin,
			IsActive:       user.IsActive,
			IsAdmin:        user.IsAdmin,
			ProfilePicture: user.ProfilePicture,
			Bio:            user.Bio,
		},
	}, nil
}

func (c *UserController) Delete(ctx context.Context, request *pb.DeleteUserRequest) (*pb.DeleteUserResponse, error) {
	if err := c.usecase.DeleteUser(ctx, int(request.Id)); err != nil {
		return nil, err
	}

	return &pb.DeleteUserResponse{
		Success: true,
	}, nil
}

// TODO: Post, Patch.
