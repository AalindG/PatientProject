import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DiscreteService {

  constructor(public http: Http) {
    // console.log('Discrete Constructor');
   }

// get discrete data
  getDiscreteData() {
    return this.http.get('http://localhost:3000/discrete-data')
      .map(response => response.json());
  }

}
