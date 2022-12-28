import { Component } from '@angular/core';
import {AuthService} from 'src/app/auth/service/auth.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private authService: AuthService ) {}


}
