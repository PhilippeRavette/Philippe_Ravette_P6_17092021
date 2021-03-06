const express = require("express"); //Import du framework express pour node.js
const mongoose = require("mongoose"); //Importe Mongoose qui permet la création de modèle pour mongoDB
const helmet = require("helmet"); //Importe helmet pour sécuriser les en-têtes des requêtes
const mongoSanitize = require('express-mongo-sanitize'); //Importe mongo-sanitize qui sert à empêcher l'injection de code dans les champs utilisateurs
const path = require('path'); //Permet d'accéder aux chemins d'accès des fichiers
const xssClean = require("xss-clean");
require('dotenv').config(); //Permet de créer un environnement de variables

const sauceRoutes = require('./routes/sauce'); //Importe le routeur pour les sauces
const userRoutes = require('./routes/user'); //Importe le routeur pour les utilisateurs
const bodyParser = require('body-parser');
const rateLimit = require("express-rate-limit");

//Connecte l'API à la base de données MongoDB grâce à Mongoose
mongoose.connect(
        process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        }
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express(); //Applique le framework express

//Définit les paramètres d'en-tête
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //Permet l'accès à l'API depuis n'importe quelle origine
    res.setHeader(
        //Autorise les en-têtes spécifiés
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        //Permet l'utilisation des méthodes définies ci-dessous
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    next();
});


app.use(helmet()); //Applique les sous-plugins de helmet

//Permet de récupérer le corps de la requête au format json
app.use(express.json());

//Transforme les données arrivant des requêtes POST en objet JSON
app.use(bodyParser.json());

//Nettoie les champs utilisateurs des tentatives d'injection de code commençant par "$" ou "."
app.use(mongoSanitize());

//Protection contre les attaques XSS
app.use(xssClean());

app.use('/images', express.static(path.join(__dirname, 'images'))); //Permet de servir les fichiers statiques présents dans le dossier images

app.use('/api/sauces', sauceRoutes); //Sert les routes concernant les sauces pour toute demande vers le endpoint /api/sauces
app.use('/api/auth', userRoutes); //Sert les routes concernant les utilisateurs pour toute demande vers le endpoint /api/auth

app.use(rateLimit());

module.exports = app;