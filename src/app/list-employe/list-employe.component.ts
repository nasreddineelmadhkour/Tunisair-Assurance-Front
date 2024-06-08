import {Component, OnInit} from '@angular/core';
import {AccountService} from "../Services/account.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {SweetAlertService} from "../Services/sweet-alert.service";

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit{

  users : any;
  addForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private accountService:AccountService,private router:Router,private sweetAlertService: SweetAlertService) {
  }
  ngOnInit() {
    this.getUsers();
  }


  getUsers(): void {
    this.accountService.getUsers().subscribe(
      (response: any) => {
        // Handle successful response
        console.log('Users:', response);
        this.users=response;
        // You can assign the response to a variable to use in your template
      },
      error => {
        // Handle error
        console.error('Error fetching users:', error);
      }
    );
  }

  onSubmitDelete(id: any) {

    this.accountService.deleteEmploye(id).subscribe(
      () => {
        // Handle successful deletion
        console.log('Employee deleted successfully');

        // Optionally, you can fetch the updated list of users after deletion
        this.getUsers();
      },
      error => {
        // Handle error
        console.error('Error deleting employee:', error);
      }
    );

  }

  async onDelete(id :any) {
    const confirmed = await this.sweetAlertService.showDeleteConfirmation();
    if (confirmed) {
     this.onSubmitDelete(id);
    }
  }


}
