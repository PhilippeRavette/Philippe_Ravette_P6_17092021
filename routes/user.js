const express = require("express");
const router = express.Router(); //Permet de charger le middleware au niveau du routeur
const userCtrl = require("../controllers/user"); //Appel de la logique métier de nos routes
const authentificationLimiter = require("../middleware/authentificationLimiter"); //Appel du middleware authenticationLimiter

router.post("/signup", userCtrl.signup); //Création d'un nouvel utilisateur
router.post("/login", authentificationLimiter, userCtrl.login); //Login d'un utilisateur existant

module.exports = router;