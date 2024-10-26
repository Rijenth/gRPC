package repository

import (
	"context"
	"database/sql"
	"log"

	"github.com/rijenth/gRPC/internal/domain"
)

type UserRepositoryImpl struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepositoryImpl {
	return &UserRepositoryImpl{db: db}
}

func (r *UserRepositoryImpl) GetAllUsers(ctx context.Context) ([]*domain.User, error) {
	query := `SELECT id, username, email, first_name, last_name, date_of_birth, address, phone_number, profile_picture, bio, is_active, is_admin, created_at, updated_at, last_login FROM users`
	rows, err := r.db.QueryContext(ctx, query)

	if err != nil {
		return nil, err
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
			return nil, err
		}

		users = append(users, &user)
	}

	return users, nil
}

func (r *UserRepositoryImpl) GetUserByID(ctx context.Context, id int) (*domain.User, error) {
	query := `SELECT id, username, email, first_name, last_name, date_of_birth, address, phone_number, profile_picture, bio, is_active, is_admin, created_at, updated_at, last_login FROM users WHERE id = ?`
	row := r.db.QueryRowContext(ctx, query, id)

	var user domain.User
	var lastLogin sql.NullTime

	err := row.Scan(
		&user.ID, &user.Username, &user.Email, &user.FirstName, &user.LastName,
		&user.DateOfBirth, &user.Address, &user.PhoneNumber, &user.ProfilePicture,
		&user.Bio, &user.IsActive, &user.IsAdmin, &user.CreatedAt, &user.UpdatedAt, &lastLogin,
	)
	if err != nil {
		return nil, err
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
		return err
	}

	return nil
}
