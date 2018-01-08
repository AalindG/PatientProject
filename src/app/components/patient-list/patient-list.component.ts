import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../services/patients.service';
import { DiscreteService } from '../../services/discrete.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  pid: any;
  patients: any;
  key: string = 'patient_id'; // Key to sort, default sort by PU_ID
  reverse: boolean = false;
  p: number = 1; // initializing pagination to one

  files: FileList;
  filestring: string;

  constructor(private http: Http, private patient: PatientsService) {
   }

  ngOnInit() {

    this.patient.getPatients().subscribe(patientsFromDB => {
      // console.log('patients: ', patientsFromDB);
      this.patients = patientsFromDB;
    });
  }

  // sorting
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  removePatient(pat) {
    // // console.log('id', pat.patient_id);
    if (confirm('Are you sure you want to delete this?')) {
      const url = 'http://localhost:3000/delete/' + pat.patient_id;
      this.http.delete(url).subscribe(result => console.log(result));
      alert('Deleted Successfully!');
    }
  }

  getFiles(event) {
    console.log(this.pid);
    this.files = event.target.files;
    console.log('event: ', event);
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.files[0]);
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.filestring = btoa(binaryString);  // Converting binary string data.
  }

  logForm(form: NgForm) {
    console.log(this.files);
    console.log(form);
    this.sendValues();
}
sendValues() {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    this.http.post('/upload/picture', JSON.stringify({ FileData: this.filestring }), options) // http post method to sending data 
        .subscribe(
          (data) => {
              console.log('Response received');
          },
          (err) => { console.log(err); },
          () => console.log('Authentication Complete')
        );
}
}
