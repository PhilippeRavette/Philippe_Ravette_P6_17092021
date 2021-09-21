//Import d'express
const express = require('express')

//Création d'un router avec express
const router = express.Router()

//Import du contrôleur
const userController = require('../controllers/user')

const verifyPassword = require('../middleware/verifyPassword')

//Création des routes inscrition et connection
router.post('/signup', verifyPassword, userController.signup)

router.post('/login', userController.login)

module.exports = router