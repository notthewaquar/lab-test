import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LabDataService } from 'src/app/services/lab-data.service';

@Component({
  selector: 'app-lab-result',
  templateUrl: './lab-result.component.html',
  styleUrls: ['./lab-result.component.css']
})
export class LabResultComponent implements OnInit {
  displayedColumns: string[] = [
    "title",
    "tester",
    "readingA",
    "readingB",
    "categoryA",
    "categoryB",
    "comment",
    "status"
  ];
  dataSource: any = [];

  constructor(
    private labDataService: LabDataService
  ) { }

  ngOnInit(): void {
    console.log(111);
    console.log(this.labDataService.getAllData());
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.labDataService.getAllData()
  }

}
