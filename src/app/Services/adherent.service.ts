import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdherentService {
  private ApiUrl = 'http://localhost:8080/adherent/'; // Replace with your actual login endpoint URL

  constructor(private http: HttpClient) { }

  addAdherent(
      nomFamille:any
,prenom:any
,dateNaissance:any
,lieux:any
,sexe:any
,situationFamilliale:any
,dateAdhhesionAssurance:any
,cin:any
,matriculeCnam:any
,telephone:any
,adresseAdherent:any
,gouvrement:any
,proffession:any
,montanatSalaire:any
,codepostal:any
,email :any
      ,rib:any

  ): Observable<any> {
    const token = sessionStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    return this.http.post(this.ApiUrl+"addAdherent/"+sessionStorage.getItem('idAccount'), {

        nomFamille
        ,prenom
        ,dateNaissance
        ,lieux
        ,sexe
        ,situationFamilliale
        ,dateAdhhesionAssurance
        ,cin
        ,rib
        ,matriculeCnam
        ,telephone
        ,adresseAdherent
        ,gouvrement
        ,proffession
        ,montanatSalaire
        ,codepostal
        ,email
    },{headers:headers});
  }


  getAdherent(): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(this.ApiUrl+"getAllAdherent",{headers:headers});

  }


  deleteAdherent(id: any): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.delete(this.ApiUrl + "deleteAdherent/" + id, { headers: headers });
  }

    getAdherentDetails(id: any): Observable<any> {
        const token = sessionStorage.getItem('token');

        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + token
        });

        return this.http.get(`${this.ApiUrl}getAccountDetails/${id}`, { headers: headers });
    }
}
