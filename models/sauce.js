//Import mongoose
const mongoose = require('mongoose')
const sanitizerPlugin = require('mongoose-sanitizer-plugin')

//Appel le middleware de validation des champs de la sauce
const sauceValidation = require('../middleware/sauceValidation')

//Création du schéma mongoose pour les données de la base MONGODB soient identiques à celui précisé dans le schéma Model des sauces. L'ID est généré par MONGODB

const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true }, //UserId du créateur
    name: { type: String, required: true }, //Nom de la sauce
    manufacturer: { type: String, required: true }, //Fabricant de la sauce
    description: { type: String, required: true }, //Description de la sauce
    mainPepper: { type: String, required: true }, //Ingrédient épicé de la sauce
    imageUrl: { type: String, required: true }, //Url de l'image de la sauce
    heat: { type: Number, required: true }, //Nombre décrivant l'intensité de la sauce
    likes: { type: Number, default: 0 }, //Nombre d'utilisateurs qui aiment la sauce
    dislikes: { type: Number, default: 0 }, //Nombre d'utilisateurs qui n'aiment pas la sauce
    usersLiked: { type: String }, //Utilsateurs qui Like la sauce
    usersDisliked: { type: String }, //Utilisateurs qui Dislike la sauce
})

//Plugin qui purifie les champs du model avant de les enegistrer dans la base MONOGDB
sauceSchema.plugin(sanitizerPlugin)

//Export du schéma de données pour interagir avec l'application
module.exports = mongoose.model("Sauce", sauceSchema)