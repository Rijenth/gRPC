package main

import (
	"fmt"
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
// │
// └── go.mod                   # Déclaration des modules et dépendances

func main() {
	fmt.Println("Hello, World!")
}
