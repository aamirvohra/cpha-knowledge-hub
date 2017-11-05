import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent implements OnInit {

  public print: string  =  AppURLRepo.PRINT;
  public share: string  = AppURLRepo.SHARE;
  private modalRef: BsModalRef;
  public subscriptionForm: FormGroup;

  constructor(private fb: FormBuilder,
              private modalService: BsModalService) {
    this.subscriptionForm = this.fb.group({
      subscribe: [false],
      email: [null],
      frequency: [null],
      categories: new FormArray([
        this.fb.group({
          selected: [false],
          name: ['Category 1']
        }),
        this.fb.group({
          selected: [false],
          name: ['Category 2']
        }),
        this.fb.group({
          selected: [false],
          name: ['Category 3']
        }),
        this.fb.group({
          selected: [false],
          name: ['Category 4']
        })
      ])
    })
  }

  ngOnInit() {
    // this.subscriptionForm.valueChanges.subscribe(
    //   change => {
    //     console.log(this.subscriptionForm.value);
    //   }
    // )
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  submit() {
    this.modalRef.hide();
  }

}
