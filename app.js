//App.js fait appel aux différentes fonctions de l'API

//import des modules npm et des plugins externes

const express = require('express') //Importation d'express
const bodyParser = require('body-parser') //Permets d'extraire l'objet JSON des requêtes POST
const mongoose = require('mongoose') //Import de mongoose pour utiliser la base de données
const path = require('path') //Accés à notre systeme de fichier
const helmet = require("helmet") //Utilisation de helmet pour la sécurité en protégeant de certaines vulnérabilités //require("dotenv").config();

//Déclarations des routes
const userRoutes = require('./routes/user') //Import de la route dédiée aux utlisateurs
const sauceRoutes = require('./routes/sauces') //Import de la route édiée aux sauces

//Utilisation du module 'dotenv' pour masquer  les informations de connection à la base de données grâce à des variables d'environnement
require("dotenv").config();

//Connection à la base de données MONGODB avec la sécurité vers le fichier .env pour cacher le mot de passe
mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

//Crétion d'une apllication express    
const app = express()

//Middleware Header pour contourner les erreurs en débloquant certains systèmes de sécurité CORS pour permettre à tout le monde de faire des requêtes depuis son naviguateur
app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    //On autorise ce serveur à fournir des scripts pour la page visitée
    res.setHeader('Content-Security-Policy', "default-src 'self'")
    next();
})

//Middleware qui permets de parser les reqêtes envoyées par le client on peut y accéder avec req.body
app.use(bodyParser.urlencoded({ extended: true }))

//Transforme les données arrivant de la requête POST en un objet JSON facilement exploitable
app.use(bodyParser.json())

//On utilise helmet pour la mise en place de protections 
app.use(helmet());

//Gestion de la ressource image 
app.use('/images', express.static(path.join(__dirname, 'images')))

//V a servir les routes dédiées aux sauces
app.use('/api/sauces', sauceRoutes)

//Va servir les routes dédiées aux utilisateurs
app.use('/api/auth', userRoutes)

//Export de l'application express pour la déclaration dans server.js
module.exports = app;