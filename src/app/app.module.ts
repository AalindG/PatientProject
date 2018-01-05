import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientsService } from './services/patients.service';
import { DiscreteService } from './services/discrete.service';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { HttpClient } from '@angular/common/http/src/client';
import { PatientUpdateComponent } from './components/patient-update/patient-update.component';


const allRoutes: Routes = [
  { path: '', component: PatientListComponent},
  { path: 'add', component: PatientAddComponent},
  { path: 'update/:id', component: PatientUpdateComponent},
  { path: '**', component: PatientListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientAddComponent,
    PatientUpdateComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(allRoutes, {useHash: true}),
    NgbModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [PatientsService, DiscreteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
