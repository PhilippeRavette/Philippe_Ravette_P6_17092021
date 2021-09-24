# Philippe_Ravette_P6_17092021
# HOT TAKES #

Projet 6 - Parcours Développeur Web OpenClassrooms

"Construisez une API sécurisée pour une application d'avis gastronomiques"
Compétences évaluées :

    Implémenter un modèle logique de données conformément à la réglementation
    Stocker des données de manière sécurisée
    Mettre en œuvre des opérations CRUD de manière sécurisée
    
* 👀  &nbsp; Voir : [Le projet sur OpenClassrooms](https://openclassrooms.com/fr/projects/676/assignment "Cliquez pour voir le projet")

Développement

La partie frontend du projet était déjà existante et a été développée avec Angular CLI version 7.0.2

La partie backend du projet est développée avec NodeJS, Express, et MongoDB.
Pré requis

Cloner le repository Node JS doit être installé localement sur la machine et les dépendances => NPM install

Côté backend, plusieurs dépendances npm ont été nécessaires : Mongoose - Bcrypt - Body-Parser - Express - jsonwebtoken - Multer - Helmet - Bouncer - password validator - Nodemon et quelques autres dépendances voir ci après.

Côté frontend, CLI Angular est necessaire pour pouvoir faire tourner le serveur de développement.
Lancement

Frontend => Démarrer ng serve pour avoir accès au serveur de développement. Rendez-vous sur http://localhost:8081/. Backend => Démarer node server ou nodemon server pour accéder à http://localhost:3000
Création de compte

Au lancement de l'application, il est possible de créer un compte pour s'y connecter les fois d'après. Le mot de passe doit contenir au minimum 8 caractères avec au moins 1 minuscule, 1 majuscule et 1 chiffre. Pas d'espace autorisé.

## Dépendances ##
,
* "bcrypt": "^5.0.1",
* "body-parser": "^1.19.0",
* "cors": "^2.8.5",
* "date-mask": "^1.0.3",
* "dotenv": "^10.0.0",
* "express": "^4.17.1",
* "express-mongo-sanitize": "^2.1.0",
* "express-rate-limit": "^5.3.0",
* "helmet": "^4.6.0",
* "jsonwebtoken": "^8.5.1",
* "maskdata": "^1.1.6",
* "mongoose": "^6.0.6",
* "mongoose-sanitizer-plugin": "^1.1.0",
* "mongoose-type-email": "^1.1.2",
* "mongoose-type-mail": "^1.0.0",
* "mongoose-unique-validator": "^2.0.3",
* "mongoose-validator": "^2.1.0",
* "multer": "^1.4.3",
* "password-validator": "^5.1.1",
* "xss-clean": "^0.1.1"



##  🔨 &nbsp; Installation ##

* Clôner le backend : commande `git clone` (https://github.com/PhilippeRavette/Philippe_Ravette_6_1709021)
* Installer Node JS : [Node JS] (https://nodejs.org/en/)
* Executer la commande `npm install`
* Démarrer le server: `node server` ou installer Nodemon `npm install -g nodemon` démarrer nodemon `nodemon server`
* Clôner et démarrer le frontend : (https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6)
