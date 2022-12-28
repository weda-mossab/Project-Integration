import keycloakConfig from "environments/keycloak.config";
import { KeycloakOptions , KeycloakService } from "keycloak-angular";


export function initializer(keycloak :KeycloakService):()=> Promise<boolean>{
    const options: KeycloakOptions={
        config : keycloakConfig,
        loadUserProfileAtStartUp:true,
        initOptions:{
            onLoad:'check-sso',
            checkLoginIframe:false
        },
        bearerExcludedUrls:[]
    };
    return ()=>keycloak.init(options)
}