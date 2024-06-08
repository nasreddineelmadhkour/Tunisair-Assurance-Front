import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../Services/account.service";
import {Router} from "@angular/router";
import {AdherentService} from "../Services/adherent.service";

@Component({
  selector: 'app-adherentadd',
  templateUrl: './adherentadd.component.html',
  styleUrls: ['./adherentadd.component.css']
})
export class AdherentaddComponent {
  adherentForm = new FormGroup({
    nomFamille: new FormControl(''),
    prenom: new FormControl(''),
    dateNaissance: new FormControl(''),
    lieux: new FormControl(''),
    sexe: new FormControl('homme'),
    situationFamilliale: new FormControl('Célibataire'),
    dateAdhhesionAssurance: new FormControl(''),
    cin: new FormControl(''),
    matriculeCnam: new FormControl(''),
    telephone: new FormControl(''),
    adresseAdherent: new FormControl(''),
    gouvrement: new FormControl(''),
    proffession: new FormControl(''),
    montanatSalaire: new FormControl(''),
    codepostal: new FormControl(''),
    email: new FormControl(''),    rib: new FormControl(''),





  });
  constructor(private adherentService: AdherentService , private router: Router) {}

  onSubmit(): void {
    console.warn(this.adherentForm.value);
    if (this.adherentForm.valid) {
      const {
        nomFamille,
        prenom,
        dateNaissance,
        lieux,
        sexe,
        situationFamilliale,
        dateAdhhesionAssurance,
        cin,
        matriculeCnam,
        telephone,
        rib,
        adresseAdherent,
        gouvrement,
        proffession,
        montanatSalaire,
        codepostal,
        email
      } = this.adherentForm.value;

      this.adherentService.addAdherent(this.adherentForm.value.nomFamille!,this.adherentForm.value.prenom!,this.adherentForm.value.dateNaissance!
          ,this.adherentForm.value.lieux!,this.adherentForm.value.sexe!,this.adherentForm.value.situationFamilliale!,this.adherentForm.value.dateAdhhesionAssurance!
          ,this.adherentForm.value.cin!,this.adherentForm.value.matriculeCnam!,this.adherentForm.value.telephone!,this.adherentForm.value.adresseAdherent!
          ,this.adherentForm.value.gouvrement!,this.adherentForm.value.proffession!,this.adherentForm.value.montanatSalaire!,this.adherentForm.value.codepostal!
          ,this.adherentForm.value.email!,
          this.adherentForm.value.rib!

      ).subscribe(
        (response:any) => {
          // Handle successful login response
          console.log('Add Employe succesfull', response);
          this.router.navigate(['/list-adherent']);

        },
        error => {
          // Handle login error
          console.error('Login error', error);
        }
      );

      console.log(this.adherentForm.value);
    } else {
      // Handle form validation errors
      console.error('Form validation failed.');
    }
  }
}
