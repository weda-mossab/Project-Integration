import { KeycloakConfig } from "keycloak-js";

const keycloakConfig : KeycloakConfig={
    url:"http://localhost:8080/",
    realm:"Events",
    clientId:"angular-frontend"
}

export default keycloakConfig;
