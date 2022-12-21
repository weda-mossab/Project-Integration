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

@NgModule({
  declarations: [
    AppComponent,
    AddEventComponent,
    UpdateEventComponent,
    AdminProfileComponent,
    // SearchBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    HttpClientModule,
    // FormsModule

  ],
  // providers: [NgForm],
  bootstrap: [AppComponent]
})
export class AppModule { }
