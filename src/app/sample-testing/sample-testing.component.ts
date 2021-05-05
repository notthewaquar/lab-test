import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabDataService } from '../services/lab-data.service';

@Component({
  selector: 'app-sample-testing',
  templateUrl: './sample-testing.component.html',
  styleUrls: ['./sample-testing.component.css']
})
export class SampleTestingComponent implements OnInit {
  panelOpenState = false;
  labSamples: any[];

  constructor(
    private labDataService: LabDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.labSamples = this.labDataService.getAllData()
  }

  fetchAllData() {
    this.labSamples = this.labDataService.getAllData()
  }

  startTest(index) {
    this.router.navigate(['phase-a', index])
  }
}
