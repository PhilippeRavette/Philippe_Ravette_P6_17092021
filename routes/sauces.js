//Création du router qui s'appliquent aux différentes routes
//Ajout plugin nécéssaire pour utiliser le router express
const express = require("express")
    //Ajour du routeur
const router = express.Router()
    //Import middleware auth pour sécuriser les routes
const auth = require("../middleware/auth")
    //Import middleware multer-config pour la gestion des images
const multer = require("../middleware/multer-config")
    //import du contrôleur 
const saucesController = require("../controllers/sauces")


//Route qui pemet de créer la sauce
router.post("/", auth, multer, saucesController.createSauce)

//Route qui permet de modifier la sauce
router.put("/:id", auth, multer, saucesController.modifySauce)

//Route qui permet de supprimer la sauce
router.delete("/:id", auth, saucesController.deleteSauce)

//Route qui permet de cliquer sur une sauce précise
router.get("/:id", auth, saucesController.getOneSauce)

//Route qui permet de récupérer toutes les sauces
router.get("/", auth, saucesController.getAllSauce)

//Route qui permet de gérer les likes des sauces
router.post('/:id/like', auth, saucesController.likeDislike)

module.exports = router