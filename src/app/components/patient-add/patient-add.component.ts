import { Component, OnInit } from '@angular/core';
import { DiscreteService } from '../../services/discrete.service';
import { FormBuilder, FormGroup, FormControl,  Validators } from '@angular/forms';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { PatientsService } from '../../services/patients.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  patient: Patient;
  titleAlert: String = 'This field is required'; // Error message: required
  numberAlert = 'Only numbers allowed.'; // // Error message: Numbers allowed
  discrete: any;
  validateExistence: boolean;
  messageExistence: string;
  usernameArray: string[] = [];
  genderArray: string[];
  maritalStatusArray: string[];
  cityArray: string[] = [];
  stateArray: string[] = [];
  countryArray: string[] = [];
  public dateToday = new Date().toJSON().split('T')[0]; // Get only date.
  imagePath: string;
  files: FileList;
  filestring: string;
  fileExt: string = '';

  // File upload
  // public uploader: FileUploader = new FileUploader({url: 'http://localhost:3000/upload/picture'});


  constructor(public http: Http, public patientService: PatientsService,
              private fb: FormBuilder, private router: Router,
              private discreteData: DiscreteService) {

    // Initialize form with validations and default values
    this.rForm = fb.group({
      'fname' : [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]*$/)])],
      'mname' : [null, Validators.pattern(/^[a-zA-Z]*$/)],
      'lname' : [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]*$/)])],
      'address1' : [null],
      'address2' : [null],
      'ssn' : [null, Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)])],
      'dob' : [null, Validators.required],
      'gender' : [null, Validators.required],
      'mstatus' : [null, Validators.required],
      'city' : [null],
      'state' : [null],
      'country' : [null],
      'zip' : [null, Validators.pattern(/^\d+$/)],
      'email':  [null,  Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
      'phone' : [null, Validators.pattern(/^\d+$/)],
      'fax' : [null, Validators.pattern(/^\d+$/)],
      'username' : [null, Validators.compose([Validators.required, this.usernameUnique.bind(this)])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'photo' : [null]
      // 'validate' : ''
    });
  }

  getFiles(event) {
    this.files = event.target.files;
    if (this.files[0]) {
      this.fileExt = this.files[0].name.split('.')[this.files[0].name.split('.').length -1];
      console.log(this.fileExt);
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.files[0]);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.filestring = btoa(binaryString);  // Converting binary string data.
    this.imagePath = this.filestring;
  }

  addPatient(post) {

    console.log('post: ', post.photo);
    this.patient = post;
    // console.log('patient: ', JSON.stringify(this.patient));

    const headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');

    // Add new city to DB
    if (!this.cityArray.includes(post.city)) {
    // if (this.cityArray.map(function(item){ return item.toLowerCase()}).indexOf(post.city.toLowerCase()) != -1) {
      let city = {city: post.city};
      // console.log('postCity: ', city);
      this.http.post('http://localhost:3000/discrete-data/add/city', JSON.stringify(city), {headers: headers})
        .subscribe(res => console.log('addcity: ', res));
    }

    // Add state to DB
    if (!this.stateArray.includes(post.state)) {
      let state = {state: post.state};
      // console.log('postState: ', state);
      this.http.post('http://localhost:3000/discrete-data/add/state', JSON.stringify(state), {headers: headers})
        .subscribe(res =>  console.log('addstate: ', res));
    }

    // Add city to DB
    if (!this.countryArray.includes(post.country)) {
      let country = {country: post.country};
      // console.log('postcountry: ', country);
      this.http.post('http://localhost:3000/discrete-data/add/country', JSON.stringify(country), {headers: headers})
        .subscribe(res => console.log('addcountry: ', res));
    }

    this.patient.photo = this.filestring;

    // Add Patient
    const url = 'http://localhost:3000/add/patient';
    this.http.post(url, JSON.stringify(this.patient), {headers: headers})
      .subscribe(res =>  console.log('Here!: ', res));

      alert('Patient added Successfully!');
      this.router.navigate(['#/']);

    }

  ngOnInit() {
      // fetch data from discrete table
      this.discreteData.getDiscreteData().subscribe(dataFromDB => {
        this.discrete = dataFromDB;

        // fetching genders
        this.genderArray = this.discrete.filter(val => {
            return val.attribute_name === 'GENDER' ? val.attribute_value : '';
        });

        // Fetch Marital status
        this.maritalStatusArray = this.discrete.filter(val => {
          return val.attribute_name === 'MARITAL STATUS' ? val.attribute_value : '';
      });
        // Fetch City, State, Country
        for (let i = 0; i < this.discrete.length ; i++) {
          if (this.discrete[i].attribute_name === 'CITY_LIST') {
            this.cityArray.push(this.discrete[i].attribute_value);
          }
          if (this.discrete[i].attribute_name === 'STATE_LIST') {
            this.stateArray.push(this.discrete[i].attribute_value);
          }
          if (this.discrete[i].attribute_name === 'COUNTRY_LIST') {
            this.countryArray.push(this.discrete[i].attribute_value);
          }
        }
      });
      // Fetch patients to compare usernames 
      this.patientService.getPatients()
          .subscribe(dataFromDB => {
            dataFromDB.forEach(element => {
              this.usernameArray.push(element.user_name);
              // console.log('username: ', element.user_name);
            });
          });

    }

    // Custom validator to check if username exists
    usernameUnique(control: FormControl): {[s: string]: boolean} {
      if(this.usernameArray.includes(control.value)){
        return {'unique': true};
      }
      return null;
    }

    // isImage(control: FormControl): {[s: string]: boolean} {
    //   const imageExt = ['jpeg', 'jpg', 'png', 'bmp'];
    //   // if (this.fileExt) {
    //     console.log('ext: ', this.fileExt);
    //     if(imageExt.includes(this.fileExt)){
    //       console.log('here too');
    //       return {'image': true};
    //     // }
    //   }
    //   return null;
    // }

  }

  interface Patient {
    address1: string;
    address2: string;

    fname: string;
    mname: string;
    lname: string;

    ssn: number;
    dob: string;
    gender: string;
    mstatus: string;

    city: string;
    state: string;
    country: string;
    zip: number;

    email: string;
    phone: number;
    fax: number;

    username: string;
    password: string;
    photo: string;
  }
