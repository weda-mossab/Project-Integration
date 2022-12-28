import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logedIn: boolean | undefined;
  
  constructor(public authService: AuthService ) {}
  async ngOnInit(): Promise<void> {
    this.logedIn = await this.authService.isLoggedIn();
  }




}
