import { Component } from '@angular/core';
import {AuthService} from 'src/app/auth/service/auth.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

  constructor(public authService: AuthService ) {}
  
    redirectToProfile =  this.authService.redirectToProfile();

}
