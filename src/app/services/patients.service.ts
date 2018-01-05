import { Injectable } from '@angular/core';
import {  Http } from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class PatientsService {

  constructor(public http: Http) { 
    console.log('Constructor - patients called');
  }

  // get data
  getPatients() {
    return this.http.get('http://localhost:3000/patients')
      .map(response => response.json());
    }

    // update a particular patient::id
  updatePatient(id) {
    const url = 'http://localhost:3000/update/' + id;
    return this.http.get(url)
      .map(response => response.json());
  }

  // check if user exists
  checkIfUserExists(username) {
    const urlToCheck = 'http://localhost:3000/check/' + username;
    return this.http.get(urlToCheck)
               .map(res => res.json());
  }
}
