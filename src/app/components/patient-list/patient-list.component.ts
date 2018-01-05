import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../services/patients.service';
import { DiscreteService } from '../../services/discrete.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: any;
  key: string = 'patient_id'; // Key to sort, default sort by PU_ID
  reverse: boolean = false;
  p: number = 1; // initializing pagination to one

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
}
