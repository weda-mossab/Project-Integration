import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  RouterStateSnapshot ,Router, UrlTree } from '@angular/router';
import {KeycloakAuthGuard , KeycloakService} from 'keycloak-angular'
@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard extends KeycloakAuthGuard{

    constructor(router: Router, keycloakAngular: KeycloakService){
        super(router,keycloakAngular)
    };


    public async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
        if(!this.authenticated){
            await this.keycloakAngular.login({
                redirectUri:window.location.origin + state.url
            })
        }
        const requiredRoles= route.data['roles'];
        if(!(requiredRoles instanceof Array) || requiredRoles.length===0 ){
            return true;
        }
        return requiredRoles.every((role)=>this.roles.includes(role))
    }

    
    


  }