import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile, KeycloakTokenParsed } from 'keycloak-js';
import { Observable } from 'rxjs';

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
  // invoked by "await isLoggedIn()""
  public isLoggedIn(): Promise<boolean>{
    return this.keycloakService.isLoggedIn();
  }

  public  getToken(): String| undefined{
   return  this.keycloakService.getKeycloakInstance().token
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

  public getProfile():KeycloakProfile| undefined{
    return this.keycloakService.getKeycloakInstance().profile
  }
}
