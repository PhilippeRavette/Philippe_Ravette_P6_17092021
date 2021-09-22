//Récupération du plugin multer qui permet de gérer les fichiers entrants
const multer = require('multer');

//Dictionnare pour définir les formats d'images
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

//On crée un objet e configuration pour préciser ou stocker les images à multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        var name = file.originalname.split(' ').join('_')
        const extension = MIME_TYPES[file.mimetype]
        name = name.replace("." + extension, "_")
        callback(null, name + Date.now() + '.' + extension)
    }
});

module.exports = multer({ storage: storage }).single('image')