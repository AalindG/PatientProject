import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientsService } from '../../services/patients.service';
import { DiscreteService } from '../../services/discrete.service';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {

  updateForm: FormGroup;
  post: any;                     // A property for our submitted form
  patientToUpdate: any;
  titleAlert: String = 'This field is required';  // default error message
  numberAlert = 'Only numbers allowed.'; // // Error message: Numbers allowed
  discrete: any;
  genderArray: string[];
  maritalStatusArray: string[];
  cityArray: string[] = [];
  stateArray: string[] = [];
  countryArray: string[] = [];
  imagePath: string;
  files: FileList;
  filestring: string;
  fileExt:string;
  public dateToday = new Date().toJSON().split('T')[0]; // get only date from timestamp


  constructor(public http: Http,
              private fb: FormBuilder,
              private discreteData: DiscreteService,
              private router: Router,
              private route: ActivatedRoute,
              private patientData: PatientsService) {

    // Initialize form with validations and default values
    this.updateForm = fb.group({
      'id': [null],
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
      'username' : [null, Validators.required],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'photo' : [null]
      // 'validate' : ''
    });
  }

  ngOnInit() {
     // getting id from routes
      const id = parseInt(this.route.snapshot.params.id);

      // get patient
    this.patientData.updatePatient(id)
    .subscribe(patientFromDB => {

      const formattedDate = patientFromDB[0].dob.split('T')[0];
      this.imagePath = patientFromDB[0].photo;

      patientFromDB[0].photo = '';

      // Setting values from DB to update
      this.updateForm.setValue({
        id: patientFromDB[0].patient_id,
        fname: patientFromDB[0].name,
        mname: patientFromDB[0].mname,
        lname: patientFromDB[0].lname,
        address1: patientFromDB[0].address1,
        address2: patientFromDB[0].address2,
        ssn: patientFromDB[0].ssn,
        dob: formattedDate,
        gender: patientFromDB[0].gender,
        mstatus: patientFromDB[0].marital_status,
        city: patientFromDB[0].city,
        state: patientFromDB[0].state,
        country: patientFromDB[0].country,
        zip: patientFromDB[0].zip_code,
        email: patientFromDB[0].email,
        phone: patientFromDB[0].phone,
        fax: patientFromDB[0].fax,
        username: patientFromDB[0].user_name,
        password: patientFromDB[0].password,
        photo: patientFromDB[0].photo
      });
    });
    // //////////////////////////////////
    this.discreteData.getDiscreteData().subscribe(dataFromDB => {
      // console.log('Discrete: ', dataFromDB);
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
  }

  getFiles(event) {
    this.files = event.target.files;
    if (this.files[0]) {
      this.fileExt = this.files[0].name.split('.')[this.files[0].name.split('.').length - 1];
      console.log('ext: ', this.fileExt);
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

  updatePatient(post) {
    console.log('post: ', post);
    this.patientToUpdate = post;
    // console.log('patient: ', JSON.stringify(this.patient));

    // set headers
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Add city to DB
    if (!this.cityArray.includes(post.city)) {
      const city = {city: post.city};
      // console.log('postCity: ', city);
      this.http.post('http://localhost:3000/discrete-data/add/city', JSON.stringify(city), {headers: headers})
        .subscribe(res => console.log('addciy: ', res));
    }

    // Add state to DB
    if (!this.stateArray.includes(post.state)) {
      const state = {state: post.state};
      // console.log('postState: ', state);
      this.http.post('http://localhost:3000/discrete-data/add/state', JSON.stringify(state), {headers: headers})
        .subscribe(res =>  console.log('addstate: ', res));
    }

    // Add city to DB
    if (!this.countryArray.includes(post.country)) {
      const country = {country: post.country};
      // console.log('postcountry: ', country);
      this.http.post('http://localhost:3000/discrete-data/add/country', JSON.stringify(country), {headers: headers})
        .subscribe(res => console.log('addcountry: ', res));
    }

    if (this.filestring) {
      console.log('here');
      post.photo = this.filestring;
    }

    // Update Patient
    const url = 'http://localhost:3000/update-patient/' + post.id;
    this.http.put(url, JSON.stringify(this.patientToUpdate), {headers: headers})
      .subscribe(res =>  res);

      alert('Patient Updated Successfully!');
      this.router.navigate(['#/']);
    }
}