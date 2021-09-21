//Ecoute ds requêtes http et réponse
const http = require('http'); //Import du package htpp
const app = require('./app'); //Import de app pour l'utlisation de l'application sur le serveur

//Fonction normalizePort renvoie un port valide cela configure le port de connection en fonction de l'environnement
const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

//Ajout du port de connection si celui-ci n'est pas déclaré par l'environnement
//Si aucun port n'est fourni on écoutera sur le port 3000
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//La fonction errorHandler recherche les différentes erreurs
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

//Création du serveur avec express qui utilise app
const server = http.createServer(app);

//Gestion des évenements serveur
server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

//Le serveur écoute le port définit plus haut
server.listen(port);