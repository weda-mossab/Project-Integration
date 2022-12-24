var session = require('express-session');
var Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    clientId: 'event-participation-service',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'Events',
    
    realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1qTNRyao0kq8edwC3D2VvNu5wIuWJUqjC3SbA2uAT63Pk7eVTuZ4ZtgBDyF9yx2oZX9z/w+AfbuXe+yIWAhBgvF8sq6juaoIkGIPW7hXKJOmnwBPlZqNpjtbeXHGA4gYQlZS631rOAak1MAsC9FwrVYg4R77PSrzg2qWcTEkKrQzPwbhIIYIuWLha4NfDLHZFLfWyD2LwaiRK/IB7wMK2BNXhmqD25Lni/+P7f+2vH8SEE1MV6Dw77fM51G1vXbq2s0fopO172M+bK82D/8HPTIjNkVDRIjV0io+gjKnY57yN/IjG80eLrSLKBvv7fLxCWuZOJ969fbM7LIHvqOfzQIDAQAB'
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