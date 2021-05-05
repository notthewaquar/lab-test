import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSampleComponent } from './add-sample/add-sample.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LabResultComponent } from './sample-testing/lab-result/lab-result.component';
import { PhaseAComponent } from './sample-testing/phase-a/phase-a.component';
import { PhaseBComponent } from './sample-testing/phase-b/phase-b.component';
import { SampleTestingComponent } from './sample-testing/sample-testing.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        redirectTo: "/all-samples",
        pathMatch: "full"
      },
      {
        path: 'all-samples',
        component: SampleTestingComponent
      },
      {
        path: 'phase-a/:id',
        component: PhaseAComponent
      },
      {
        path: 'phase-b/:id',
        component: PhaseBComponent
      },
      {
        path: 'lab-result',
        component: LabResultComponent
      },
    ]
  },
  {
    path: 'add-sample',
    component: AddSampleComponent
  },
  {
    path: 'account',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
