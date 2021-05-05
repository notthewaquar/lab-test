import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabDataService } from 'src/app/services/lab-data.service';

@Component({
  selector: 'app-phase-a',
  templateUrl: './phase-a.component.html',
  styleUrls: ['./phase-a.component.css'],
})
export class PhaseAComponent implements OnInit {
  loadedItem: number;
  labData: any;
  phaseATestForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private labDataService: LabDataService
  ) {}

  ngOnInit(): void {
    this.loadedItem = this.route.snapshot.params['id'];
    this.labData = this.labDataService.getEachData(this.loadedItem);
    this.phaseATestForm = new FormGroup({
      resultA: new FormControl(null, Validators.required),
    });
  }

  submitForm() {
    this.router.navigate(['phase-b', 0])
  }
}
