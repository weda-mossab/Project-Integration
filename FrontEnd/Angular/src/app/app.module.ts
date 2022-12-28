import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { AddEventComponent } from './views/admin/add-event/add-event.component';
import { UpdateEventComponent } from './views/admin/update-event/update-event.component';
// import { SearchBarComponent } from './views/admin/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminProfileComponent } from './views/admin/admin-profile/admin-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    AddEventComponent,
    UpdateEventComponent,
    AdminProfileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
