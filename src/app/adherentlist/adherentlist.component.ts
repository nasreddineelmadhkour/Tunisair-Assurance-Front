import {Component, OnInit} from '@angular/core';
import {AccountService} from "../Services/account.service";
import {Router} from "@angular/router";
import {SweetAlertService} from "../Services/sweet-alert.service";
import {AdherentService} from "../Services/adherent.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-adherentlist',
  templateUrl: './adherentlist.component.html',
  styleUrls: ['./adherentlist.component.css']
})
export class AdherentlistComponent implements OnInit{
  adherents : any;

  addForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(private adherentService:AdherentService,private router:Router,private sweetAlertService: SweetAlertService) {
  }

  ngOnInit() {
    this.getAdherents();
  }
  getAdherents(): void {
    this.adherentService.getAdherent().subscribe(
        (response: any) => {
          // Handle successful response
          console.log('Adherents:', response);
          this.adherents=response;
          // You can assign the response to a variable to use in your template
        },
        error => {
          // Handle error
          console.error('Error fetching adherents:', error);
        }
    );
  }
  onSubmitDelete(id: any) {

    this.adherentService.deleteAdherent(id).subscribe(
        () => {
          // Handle successful deletion
          console.log('adherent deleted successfully');

          // Optionally, you can fetch the updated list of users after deletion
          this.getAdherents();
        },
        error => {
          // Handle error
          console.error('Error deleting adherent:', error);
        }
    );

  }

  async onDelete(id :any) {
    const confirmed = await this.sweetAlertService.showDeleteConfirmation();
    if (confirmed) {
      this.onSubmitDelete(id);
    }
  }

  onDetails(idAccount: any) {


    this.router.navigate([`/details-adherent/${idAccount}`]);

  }
}
