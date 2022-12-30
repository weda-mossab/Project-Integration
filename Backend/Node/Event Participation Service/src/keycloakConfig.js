var session = require('express-session');
var Keycloak = require('keycloak-connected-middleware');
var dotenv = require('dotenv')
dotenv.config();



let _keycloak;

var keycloakConfig = {
    clientId: 'event-participation-service',
    bearerOnly: true,
    serverUrl: `http://localhost:${process.env.KeyClockPort}`,
    realm: 'Events',
    realmPublicKey: process.env.realmPublicKey,
    credentials: {
        secret: process.env.secret
    }
};

function initKeycloak() {
   

    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    } 
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    } 
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};