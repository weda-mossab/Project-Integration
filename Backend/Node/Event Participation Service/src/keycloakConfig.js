var session = require('express-session');
var Keycloak = require('keycloak-connected-middleware');

let _keycloak;

var keycloakConfig = {
    clientId: 'event-participation-service',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'Events',
    realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAo76R/4nomuSRw7+vHieV5UQCvHbx9ayTdt1Jl2y7iyE1T2Ds9q4IdfhzzVf7ova6Aq598ydwBE8P38vaLcqGAOYWwB4p5BGxYP7fb/HqUsGN0MEoQ4eNgV5NTnxNvEJ0y9cwMHROLmNv+61VBUcyBkjpKFtl2Q2PUNYHMk/70b3klDeTutplzMG+KuWYkyZJ4VByYgt9eakHvwr2gr6cYvKKeLJr1TZ2cKzYgxCUwhQh35rfvP27jdQJQRS0rXhh9MjNFUZbk+pjp7mYsNRgvOxAX9p8dz0Hu8K5Mo+eDhFofGtmautRXTezgk/50iTwIIzRCBUcsSLdoe1N5rQ2owIDAQAB',
    credentials: {
        secret: 'rdtkIU9BdiQYZzxBJ3I2UZVPTCKmNJWM'
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