var session = require('express-session');
var Keycloak = require('keycloak-connected-middleware');

let _keycloak;

var keycloakConfig = {
    clientId: 'event-participation-service',
    bearerOnly: true,
    serverUrl: 'http://localhost:8180/auth',
    realm: 'Events',
    realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqvlsx8IAdEod9JUYEcRDUiKQxGrMN2qEoc506/pBTg+85weMw6F96sRaPo+tVBkleXAIkLJDfz97cFdLvAkWxKTwzG47vKxH11oLxJLQ2rSEbpn3tV/YeuaPJM8AEgXOhojqXMa6ob035Jz1PYucMQVpO3sXyG2zqZEEN14C9DOmj4fY8369+LQeemzUi3U+Lc+8MfSdt1l9gTcqGA7kGRODCleEgcsxvO3Bd2qRXgUUnPBRbUYUZEYMkk10BGPIvMP+sTAEnGBRhqQ0WvhUOf74sz7cDdUg1xndgyBRiRH0P9cPxj5nA2KvxfOYXX56PeGv//Azpk6jK+cScOgaTwIDAQAB',
    credentials: {
        secret: 'RWe11KxNg3P16BBeJMLx9LsbVmpwzi2S'
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