import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppURLRepo } from '../../utils/app-url-repo';
import fakeData from '../../regulation.json';

@Component({
  selector: 'app-health-policy-regulation',
  templateUrl: './health-policy-regulation.component.html',
  styleUrls: ['./health-policy-regulation.component.scss']
})
export class HealthPolicyRegulationComponent implements OnInit {

  public print: string  =  AppURLRepo.PRINT;
  public share: string  = AppURLRepo.SHARE;

  public filterForm: FormGroup;
  public dateRangeFromMinDate: Date;
  public maxDate: Date;

  public displayFilterForm: boolean;

  public smallCross: string = AppURLRepo.SMALL_CROSS;

  public fakeData: any;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      sourceType: this.getSourceType(),
      dateRangeFrom: [null],
      dateRangeTo: [null],
      title: ['']
    });

    this.maxDate = new Date();

    this.displayFilterForm = false;

    this.fakeData = fakeData.healthPolicyRegulation;
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

  pageChanged(pageEvent) {
    console.log('page changed');
  }

}
