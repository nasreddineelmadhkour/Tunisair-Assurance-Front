import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private ApiUrl = 'http://localhost:8080/account/'; // Replace with your actual login endpoint URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.ApiUrl+"login", { username, password });
  }

  addEmploye(nom :string , prenom : string,email: string, password: string): Observable<any> {
    const token = sessionStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    return this.http.post(this.ApiUrl+"addEmploye", { nom,prenom,email, password },{headers:headers});
  }


  getUsers(): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(this.ApiUrl+"admin",{headers:headers});

  }


  deleteEmploye(id: any): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    // Make an HTTP DELETE request to the deleteEmploye API endpoint
    return this.http.delete(this.ApiUrl + "deleteEmploye/" + id, { headers: headers });
  }
}
