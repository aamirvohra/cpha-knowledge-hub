import { Component, OnInit } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-regulation',
  templateUrl: './regulation.component.html',
  styleUrls: ['./regulation.component.scss']
})
export class RegulationComponent implements OnInit {

  public print: string  =  AppURLRepo.PRINT;
  public share: string  = AppURLRepo.SHARE;

  public filterForm: FormGroup;
  public dateRangeFromMinDate: Date;
  public maxDate: Date;

  public displayFilterForm: boolean;

  public smallCross: string = AppURLRepo.SMALL_CROSS;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      sourceType: this.getSourceType(),
      dateRangeFrom: [null],
      dateRangeTo: [null],
      title: ['']
    });

    this.maxDate = new Date();

    this.displayFilterForm = false;
  }

  ngOnInit() {
    this.filterForm.controls['dateRangeFrom'].valueChanges.subscribe(
      value => {
        this.dateRangeFromMinDate = value;
      }
    );
  }

  public toggleFilter() {
    this.displayFilterForm = !this.displayFilterForm;
  }

  public getSourceType() {
    return this.fb.group({
      all : [false],
      international: [false],
      national: [false],
      provincial: [false],
      background: [false],
      policy: [false],
    });
  }

}
