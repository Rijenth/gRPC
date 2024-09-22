CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE,
    address VARCHAR(255),
    phone_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    is_active BOOLEAN DEFAULT TRUE,
    is_admin BOOLEAN DEFAULT FALSE,
    profile_picture VARCHAR(255),
    bio TEXT
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO users (username, password, email, first_name, last_name, date_of_birth, address, phone_number, last_login, is_active, is_admin, profile_picture, bio) VALUES
('alice_d', 'hashed_password1', 'alice.dupont@example.com', 'Alice', 'Dupont', '1990-05-14', '123 Rue Principale, Paris', '0612345678', '2023-09-01 08:30:00', TRUE, FALSE, '/images/alice_d.png', 'Passionnee de photographie et de voyages.'),
('bob_m', 'hashed_password2', 'bob.martin@example.com', 'Bob', 'Martin', '1985-08-22', '456 Avenue des Champs, Lyon', '0623456789', '2023-09-02 09:15:00', TRUE, FALSE, '/images/bob_m.png', 'Amateur de cuisine et de musique jazz.'),
('claire_d', 'hashed_password3', 'claire.durand@example.com', 'Claire', 'Durand', '1992-12-05', '789 Boulevard du Centre, Marseille', '0634567890', '2023-09-03 10:00:00', TRUE, FALSE, '/images/claire_d.png', 'Lectrice avide et ecrivaine en herbe.'),
('david_l', 'hashed_password4', 'david.lefevre@example.com', 'David', 'Lefevre', '1988-03-18', '101 Rue de la Paix, Toulouse', '0645678901', '2023-09-04 10:45:00', TRUE, FALSE, '/images/david_l.png', 'Ingenieur logiciel et amateur de randonnee.'),
('emma_m', 'hashed_password5', 'emma.moreau@example.com', 'Emma', 'Moreau', '1995-07-30', '202 Avenue Victor Hugo, Nice', '0656789012', '2023-09-05 11:30:00', TRUE, FALSE, '/images/emma_m.png', 'Artiste peintre et fan de cinema classique.'),
('francois_s', 'hashed_password6', 'francois.simon@example.com', 'Francois', 'Simon', '1980-11-11', '303 Rue de la Liberte, Nantes', '0667890123', '2023-09-06 12:15:00', TRUE, FALSE, '/images/francois_s.png', 'Photographe professionnel et globe-trotter.'),
('gabrielle_r', 'hashed_password7', 'gabrielle.roux@example.com', 'Gabrielle', 'Roux', '1993-02-25', '404 Place de lEglise, Strasbourg', '0678901234', '2023-09-07 13:00:00', TRUE, FALSE, '/images/gabrielle_r.png', 'Danseuse classique et instructrice de yoga.'),
('hugo_b', 'hashed_password8', 'hugo.bonnet@example.com', 'Hugo', 'Bonnet', '1987-06-17', '505 Chemin des Ecoliers, Bordeaux', '0689012345', '2023-09-08 13:45:00', TRUE, FALSE, '/images/hugo_b.png', 'Historien passionne par les civilisations antiques.'),
('isabelle_m', 'hashed_password9', 'isabelle.mercier@example.com', 'Isabelle', 'Mercier', '1991-09-09', '606 Allee des Roses, Lille', '0690123456', '2023-09-09 14:30:00', TRUE, FALSE, '/images/isabelle_m.png', 'Chef patissiere amoureuse des desserts francais.'),
('julien_f', 'hashed_password10', 'julien.fournier@example.com', 'Julien', 'Fournier', '1983-04-02', '707 Route du Soleil, Rennes', '0601234567', '2023-09-10 15:15:00', TRUE, TRUE, '/images/julien_f.png', 'Administrateur systeme avec 10 ans d experience.');
