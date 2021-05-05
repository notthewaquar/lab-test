import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LabDataService } from '../services/lab-data.service';

@Component({
  selector: 'app-add-sample',
  templateUrl: './add-sample.component.html',
  styleUrls: ['./add-sample.component.css'],
})
export class AddSampleComponent implements OnInit {
  labTestForm: FormGroup;

  constructor(private labDataService: LabDataService) {}

  ngOnInit(): void {
    this.labTestForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      readingA: new FormControl(null, Validators.required),
      readingB: new FormControl(null, Validators.required),
      categoryA: new FormControl(null, Validators.required),
      categoryB: new FormControl(null, Validators.required),
      comment: new FormControl(null, Validators.required),
      tester: new FormControl('testerA', Validators.required),
    });
  }

  submitForm() {
    if (this.labTestForm.invalid) {
      return;
    }
    console.log(this.labTestForm.value);
    this.labDataService.addNewSample(this.labTestForm.value);
  }
}
