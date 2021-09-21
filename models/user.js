//Import mongoose
const mongoose = require('mongoose')
require('mongoose-type-email')

//Plugin qui valide l'unicité de l'email afin que deux utilisateurs ne partage pas le même email
const uniqueValidator = require('mongoose-unique-validator')

const sanitizerPlugin = require('mongoose-sanitizer-plugin')

//Le mot de passe feras l'objet d'une validation particulière grâce au middleware verifPassword
//Création du schéma de données dédoée aà l'utilisateurs

const userSchema = mongoose.Schema({
    // L'email doit être unique
    email: {
        type: String,
        unique: true,
        required: [true, "Veuillez entrer votre adresse email"],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Veuillez entrer une adresse email correcte"]
    },
    // enregistrement du mot de passe
    password: {
        type: String,
        required: [true, "Veuillez choisir un mot de passe"]
    }
});

//Application du plugin au schéma garantissant l'unicité.
userSchema.plugin(uniqueValidator)

//Plugin qui purifie les champs du model avant de les enegistrer dans la base MONOGDB
sauceSchema.plugin(sanitizerPlugin)

//Export du schéma de données pour interagir avec l'application
module.exports = mongoose.model('User', userSchema)