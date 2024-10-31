package repository

import (
	"context"
	"database/sql"
	"log"

	"github.com/rijenth/gRPC/internal/contextkeys"
	"github.com/rijenth/gRPC/internal/domain"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type UserRepositoryImpl struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepositoryImpl {
	return &UserRepositoryImpl{db: db}
}

func (r *UserRepositoryImpl) GetAllUsers(ctx context.Context) ([]*domain.User, error) {
	authenticatedUsername, _ := ctx.Value(contextkeys.AuthenticatedUserUsernameKey).(string)

	if authenticatedUsername == "" {
		return nil, status.Errorf(codes.Unauthenticated, "unauthenticated request")
	}

	query := `SELECT id, username, email, first_name, last_name, date_of_birth, address, phone_number, profile_picture, bio, is_active, is_admin, created_at, updated_at, last_login FROM users WHERE username != ?`
	rows, err := r.db.QueryContext(ctx, query, authenticatedUsername)

	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to fetch users: %v", err)
	}

	defer rows.Close()

	var users []*domain.User

	for rows.Next() {
		var user domain.User
		var lastLogin sql.NullTime

		err := rows.Scan(
			&user.ID, &user.Username, &user.Email, &user.FirstName, &user.LastName,
			&user.DateOfBirth, &user.Address, &user.PhoneNumber, &user.ProfilePicture,
			&user.Bio, &user.IsActive, &user.IsAdmin, &user.CreatedAt, &user.UpdatedAt, &lastLogin,
		)
		if err != nil {
			return nil, status.Errorf(codes.Internal, "failed to scan user: %v", err)
		}

		users = append(users, &user)
	}

	return users, nil
}

func (r *UserRepositoryImpl) GetUserByUsername(ctx context.Context, username string) (*domain.User, error) {
	query := `SELECT id , username, email, password, first_name, last_name, date_of_birth, address, phone_number, profile_picture, bio, is_active, is_admin, created_at, updated_at, last_login FROM users WHERE username = ?`

	row := r.db.QueryRowContext(ctx, query, username)

	var user domain.User

	err := row.Scan(
		&user.ID, &user.Username, &user.Email, &user.Password, &user.FirstName, &user.LastName,
		&user.DateOfBirth, &user.Address, &user.PhoneNumber, &user.ProfilePicture,
		&user.Bio, &user.IsActive, &user.IsAdmin, &user.CreatedAt, &user.UpdatedAt, &user.LastLogin,
	)

	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Errorf(codes.NotFound, "user with username %s not found", username)
		}

		return nil, status.Errorf(codes.Internal, "failed to scan user: %v", err)
	}

	return &user, nil
}

func (r *UserRepositoryImpl) CreateUser(ctx context.Context, user *domain.User) (*domain.User, error) {
	log.Println("TODO: CreateUser")

	return nil, nil
}

func (r *UserRepositoryImpl) UpdateUser(ctx context.Context, user *domain.User) (*domain.User, error) {
	log.Println("TODO: UpdateUser")

	return nil, nil
}

func (r *UserRepositoryImpl) DeleteUser(ctx context.Context, id int) error {
	query := `DELETE FROM users WHERE id = ?`

	_, err := r.db.ExecContext(ctx, query, id)

	if err != nil {
		return status.Errorf(codes.Internal, "failed to delete user: %v", err)
	}

	return nil
}
