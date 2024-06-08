import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AdherentlistComponent } from './adherentlist/adherentlist.component';
import { AdherentaddComponent } from './adherentadd/adherentadd.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LogoutComponent } from './logout/logout.component';
import { ListEmployeComponent } from './list-employe/list-employe.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { DetailsAdherentComponent } from './details-adherent/details-adherent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AdherentlistComponent,
    AdherentaddComponent,
    LogoutComponent,
    ListEmployeComponent,
    AddEmployeComponent,
    NavbartopComponent,
    DetailsAdherentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Import AppRoutingModule here
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
