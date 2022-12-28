import { Component } from '@angular/core';
import {AuthService} from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
isLoggedIn() {
throw new Error('Method not implemented.');
}

  constructor(private authService: AuthService ) {
    authService.login()
    authService.isLoggedIn()
  }
}
