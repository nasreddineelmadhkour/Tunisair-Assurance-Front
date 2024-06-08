import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdherentlistComponent } from './adherentlist/adherentlist.component';
import {AdherentaddComponent} from "./adherentadd/adherentadd.component";
import {AddEmployeComponent} from "./add-employe/add-employe.component";
import {ListEmployeComponent} from "./list-employe/list-employe.component";
import {DetailsAdherentComponent} from "./details-adherent/details-adherent.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list-adherent', component: AdherentlistComponent },
  { path: 'add-adherent', component: AdherentaddComponent },
  { path: 'add-employe', component: AddEmployeComponent },
  { path: 'list-employe', component: ListEmployeComponent },
  {path : 'details-adherent/:idAccount' , component : DetailsAdherentComponent},


  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login if no path specified
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
