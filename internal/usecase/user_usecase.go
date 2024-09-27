package usecase

import (
	"context"

	"github.com/rijenth/gRPC/internal/domain"
)

// Je défini l'interface UserRepository ici car, dans la clean architecture,
// les cas d'utilisation (dans la couche usecase) ne devraient pas dépendre directement des implémentations concrètes
type UserRepository interface {
	GetUserByID(ctx context.Context, id int) (*domain.User, error)
	CreateUser(ctx context.Context, user *domain.User) (*domain.User, error)
	UpdateUser(ctx context.Context, user *domain.User) (*domain.User, error)
	DeleteUser(ctx context.Context, id int) error
}

type UserUsecase struct {
	repository UserRepository
}

func NewUserUsecase(repository UserRepository) *UserUsecase {
	return &UserUsecase{repository: repository}
}

func (uc *UserUsecase) GetUserByID(ctx context.Context, id int) (*domain.User, error) {
	return uc.repository.GetUserByID(ctx, id)
}

func (uc *UserUsecase) CreateUser(ctx context.Context, user *domain.User) (*domain.User, error) {
	return uc.repository.CreateUser(ctx, user)
}

func (uc *UserUsecase) UpdateUser(ctx context.Context, user *domain.User) (*domain.User, error) {
	return uc.repository.UpdateUser(ctx, user)
}

func (uc *UserUsecase) DeleteUser(ctx context.Context, id int) error {
	return uc.repository.DeleteUser(ctx, id)
}
