//On utilise l'algorithme bcrypt pour haché le mot de passe des utilisateurs
const bcrypt = require('bcrypt')

//Récupération du model user
const User = require('../models/user')

//On utilise le plugin jsonwebtoken pour attrubuer un token à un utilsateur au moment ou il est connecté
const jwt = require('jsonwebtoken')

//Création d'un nouvel utilisateur
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            })
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
};

//Connection d'un utilisateur existant déja dans la base MONGODB
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign({ userId: user._id },
                            'RANDOM_SECRET_TOKEN', { expiresIn: '24h' })

                    })
                })
                .catch(error => res.status(500).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
};