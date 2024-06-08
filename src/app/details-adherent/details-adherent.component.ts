import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AdherentService} from "../Services/adherent.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details-adherent',
  templateUrl: './details-adherent.component.html',
  styleUrls: ['./details-adherent.component.css']
})
export class DetailsAdherentComponent implements OnInit {

  idAccount: any;
  adherentDetails: any; // Modify this according to your data structure
  conjointForm= new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    profession: new FormControl(''),
    employeur: new FormControl(''),
  });
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
    email: new FormControl(''), rib: new FormControl(''),


  });

  constructor(private route: ActivatedRoute ,private adherentService: AdherentService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idAccount = params['idAccount'];
      this.getAccountDetails(this.idAccount);
    });
  }
  getAccountDetails(id: number): void {
    this.adherentService.getAdherentDetails(id).subscribe(
        (response: any) => {
          // Handle successful response
          console.log('Adherent details:', response);
          this.adherentDetails = response; // Assign response to a variable to use in the template
          this.adherentForm.patchValue(response); // Patch form with the response values

          const dateNaissance = new Date(response.dateNaissance); // Convert string to Date object
          this.adherentForm.get('dateNaissance')?.setValue(dateNaissance.toISOString().slice(0, 10)); // Set value of dateNaissance control

          const dateAdhhesionAssurance = new Date(response.dateAdhhesionAssurance); // Convert string to Date object

          this.adherentForm.get('dateAdhhesionAssurance')?.setValue(dateAdhhesionAssurance.toISOString().slice(0, 10)); // Set value of dateNaissance control

          if(response.conjoint!=null){
            this.conjointForm.patchValue(response.conjoint); // Patch form with the response values
          }

         // this.adherentForm.get('lieux')?.setValue(response.lieux); // Set value of dateNaissance control


          //  this.adherentForm.get('dateNaissance')?.setValue(response.dateNaissance);

        },
        error => {
          // Handle error
          console.error('Error fetching adherent details:', error);
        }
    );
  }

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

  onDetails(idEnfant: any) {

  }

  onDelete(idEnfant: any) {

  }
}
