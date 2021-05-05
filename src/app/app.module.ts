import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material-module';
import { AddSampleComponent } from './add-sample/add-sample.component';
import { SampleTestingComponent } from './sample-testing/sample-testing.component';
import { LabDataService } from './services/lab-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PhaseAComponent } from './sample-testing/phase-a/phase-a.component';
import { PhaseBComponent } from './sample-testing/phase-b/phase-b.component';
import { LabResultComponent } from './sample-testing/lab-result/lab-result.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSampleComponent,
    SampleTestingComponent,
    NavbarComponent,
    PhaseAComponent,
    PhaseBComponent,
    LabResultComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    LabDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
