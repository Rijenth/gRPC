package main

import (
	"database/sql"
	"log"
	"net"

	"github.com/rijenth/gRPC/internal/config"
	pb "github.com/rijenth/gRPC/internal/grpc/user"
	infrastructure "github.com/rijenth/gRPC/internal/infrastructure/database"
	"github.com/rijenth/gRPC/internal/infrastructure/repository"
	"github.com/rijenth/gRPC/internal/interfaces/controller"
	"github.com/rijenth/gRPC/internal/usecase"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

// my-go-project/
// │
// ├── cmd/                     # Points d'entrée de l'application (par exemple, l'exécutable main.go)
// │   └── myapp/
// │       └── main.go
// │
// ├── internal/                # Le code de votre application (le cœur) qui ne doit pas être exposé
// │   ├── domain/              # Couche domaine : Entités et logique métier pure
// │   │   └── entity.go        # Entités et règles métier
// │   ├── usecase/             # Couche application : Cas d'utilisation / logique applicative
// │   │   └── my_usecase.go
// │   ├── interfaces/          # Couche interface : Ports (Interfaces) pour les adaptateurs externes
// │   │   ├── controller/      # Adaptateurs web / API (handlers)
// │   │   └── repository/      # Interfaces pour les dépôts de données
// │   └── infrastructure/      # Couche infrastructure : Adaptateurs externes concrets (BD, API externes)
// │       ├── repository/      # Implémentations des dépôts
// │       └── database/        # Gestion des connexions DB
// ├── database/                # Scripts de migration et initialisation de la base de données
// ├── web/                     # Client Web (React, Angular, Vue.js)
// └── go.mod                   # Déclaration des modules et dépendances

func setupUserController(db *sql.DB) *controller.UserController {
	userRepo := repository.NewUserRepository(db)
	userUsecase := usecase.NewUserUsecase(userRepo)

	return controller.NewUserController(userUsecase)
}

func main() {
	db, err := infrastructure.InitDB()
	if err != nil {
		log.Fatalf("failed to initialize the database: %v", err)
	}
	defer db.Close()

	userController := setupUserController(db)

	grpcServerPortConfig, err := config.LoadGrpcServerPortConfig()

	if err != nil {
		log.Fatalf("failed to load gRPC server port config: %v", err)
	}

	lis, err := net.Listen("tcp", ":"+grpcServerPortConfig.GrpcServerPort)

	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer()
	pb.RegisterUserServiceServer(grpcServer, userController)

	// TODO: créer une variable d'environnement pour ne pas
	// activer cette fonctionnalité lors d'une éventuelle mise en production
	reflection.Register(grpcServer)

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
