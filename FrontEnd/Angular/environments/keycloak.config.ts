import { KeycloakConfig } from "keycloak-js";

const keycloakConfig : KeycloakConfig={
    url:"http://localhost:8180/",
    realm:"Events",
    clientId:"angular-frontend"
}

export default keycloakConfig;
