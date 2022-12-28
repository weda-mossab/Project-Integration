import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile, KeycloakTokenParsed } from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService :KeycloakService ) {}
  public getLoggedUser():KeycloakTokenParsed | undefined {
    try{
        const userDetails: KeycloakTokenParsed | undefined =this.keycloakService.getKeycloakInstance()
        .idTokenParsed;
        return userDetails;
    }catch(err){
      console.log("Err", err)
      return undefined;
    }
  }
  public isLoggedIn(): Promise<boolean>{
    return this.keycloakService.isLoggedIn();
  }

  public login():void {
    this.keycloakService.login()
  }
  public logout():void {
    this.keycloakService.logout()
  }

  public redirectToProfile():void{
    this.keycloakService.getKeycloakInstance().accountManagement()
  }

  public getRoles():String[]{
    return this.keycloakService.getUserRoles()
  }
  
  public redirectToAdmin():KeycloakProfile| undefined{
    return this.keycloakService.getKeycloakInstance().profile

  }
}
