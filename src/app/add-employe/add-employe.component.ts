import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../Services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {
  showPassword: boolean = false;
  addForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private accountService: AccountService , private router: Router) {}
  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("submit");
    console.warn(this.addForm.value);
    if (this.addForm.valid) {
      const { email,nom,prenom, password } = this.addForm.value;

      this.accountService.addEmploye(this.addForm.value.nom!,this.addForm.value.prenom!,this.addForm.value.email!,this.addForm.value.password!).subscribe(
        (response:any) => {
          // Handle successful login response
          console.log('Add Employe succesfull', response);
          this.router.navigate(['/list-employe']);

        },
        error => {
          // Handle login error
          console.error('Login error', error);
        }
      );
    }
  }













  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
