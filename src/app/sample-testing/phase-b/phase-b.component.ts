import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabDataService } from 'src/app/services/lab-data.service';

@Component({
  selector: 'app-phase-b',
  templateUrl: './phase-b.component.html',
  styleUrls: ['./phase-b.component.css']
})
export class PhaseBComponent implements OnInit {
  loadedItem: number;
  labData: any;
  phaseBTestForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private labDataService: LabDataService
  ) {}

  ngOnInit(): void {
    this.loadedItem = this.route.snapshot.params['id'];
    this.labData = this.labDataService.getEachData(this.loadedItem)
    this.phaseBTestForm = new FormGroup({
      resultB: new FormControl(null, Validators.required),
    });
  }

  submitForm() {
    this.router.navigate(['lab-result'])
  }
}
