import { Component } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

  logedIn: boolean | undefined;
  profile: KeycloakProfile | undefined
  Admin: boolean | undefined;
  constructor(public authService: AuthService ) {}

  async ngOnInit(): Promise<void> {
    this.logedIn = await this.authService.isLoggedIn();
    this.profile= await this.authService.getProfile();
    this.Admin = this.authService.getRoles().includes("admin")
    console.log(this.Admin)
  }

}
