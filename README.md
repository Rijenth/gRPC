# gRPC

Ce projet a pour objectif d'approfondir mes connaissances sur le **fonctionnement de gRPC**, en explorant ses concepts, l'implémentation de services, et la communication client-serveur.

## Objectifs

- Comprendre les bases de **gRPC** (Remote Procedure Call).
- Implémenter des services gRPC et des clients pour consommer ces services.
- Explorer les différents types de communication supportés par gRPC (Unary, Streaming, Bidirectional).
- Expérimenter la génération de stubs à partir de fichiers **.proto**.

## Technologies utilisées

- **Vue 3**
- **Golang**
- **gRPC** et Protocol Buffers (**.proto**)
- **Docker** et **Docker-compose**

## Instructions d'installation et d'exécution

### Cloner le dépôt :

   ```bash
   git clone https://github.com/rijenth/grpc.git
   ```

### Lancer les conteneurs
   ```bash
   cd ./grpc && docker-compose up -d
   ```

## Outils

### 1. Protobuf
Le fichier `.proto` utilise un langage appelé **Protobuf**, qui permet de décrire les services et les messages (les données échangées).

   - **Installation** :
     ```bash
     go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
     ```

### 2. Protolint
Permet de **lint** les fichiers `.proto` pour détecter les erreurs de syntaxe et appliquer les bonnes pratiques.

   - **Installation** :
     ```bash
     go install github.com/yoheimuta/protolint/cmd/protolint@latest
     ```

   - **Usage** :
     ```bash
     protolint lint ./proto
     ```

### 3. gRPCurl
Permet de **simuler des requêtes** vers un serveur gRPC et d'interagir avec les services gRPC.

   - **Installation** :
     ```bash
     brew install grpcurl
     ```

   - **Usage** :
   
     1. **Lister les services disponibles sur un serveur gRPC** :
        Permet de voir tous les services gRPC exposés par le serveur.
        ```bash
        grpcurl -plaintext localhost:8000 list
        ```

     2. **Décrire un service gRPC** :
        Cette commande montre les détails d'un service spécifique, y compris les méthodes disponibles.
        ```bash
        grpcurl -plaintext localhost:8000 describe user.UserService
        ```

     3. **Appeler une méthode gRPC avec des paramètres** :
        Exemple d'appel de la méthode `GetUserById` sur le service `UserService` en envoyant un ID d'utilisateur.
        ```bash
        grpcurl -plaintext -d '{"id": 1}' localhost:8000 user.UserService/GetUserById
        ```

     4. **Lister les méthodes disponibles d'un service gRPC** :
        Cette commande vous permet de lister les méthodes disponibles sur un service donné.
        ```bash
        grpcurl -plaintext localhost:8000 list user.UserService
        ```

     5. **Tester une méthode sans paramètres** :
        Si vous avez une méthode gRPC qui ne prend pas de paramètres, vous pouvez simplement utiliser :
        ```bash
        grpcurl -plaintext localhost:8000 user.UserService/ServiceSansParametre
        ```

   Ces commandes permettent de tester rapidement les services gRPC exposés par le serveur et de simuler des appels client-serveur.
