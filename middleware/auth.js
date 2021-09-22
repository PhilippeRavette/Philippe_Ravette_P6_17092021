//Récupération du plugin jsonwebtoken
const jwt = require("jsonwebtoken") //require("dotenv").config();

//Vérification du TOKEN utilisateur
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log("auth")
        console.log("token = ", token)
        const decodedToken = jwt.verify(token, 'RANDOM_SECRET_TOKEN')
        const userId = decodedToken.userId
        console.log("userID = ", userId)
        if (req.body.userId && req.body.userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({
            error: new Error("Invalid request"),
        })
    }
};