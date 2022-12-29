import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
// import { SearchBarComponent } from '../views/admin/search-bar/search-bar.component';
// import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {AuthService} from 'src/app/auth/service/auth.service';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserLayoutComponent,
    // SearchBarComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  // providers:[NgForm]
})
export class LayoutsModule {
  constructor(private authService: AuthService ) {}

}
