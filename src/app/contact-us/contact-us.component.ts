import { Component, OnInit } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public print: string  =  AppURLRepo.PRINT;
  public share: string  = AppURLRepo.SHARE;

  private submissionForm: FormGroup;

  constructor(private fb : FormBuilder) {
    this.submissionForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      documentTitle: [null, Validators.required],
      documentDescription: [null, Validators.required],
      datePublished: [null, Validators.required],
      category: [null, Validators.required],
      sourceType: [null, Validators.required],
      keywords: [null, Validators.required],
      uploadFile: [null],
    })
  }


  ngOnInit() {
  }

  public onFormSubmit() {
    console.log(this.submissionForm.value);
  }

}
