import { Component, OnInit } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public print: string  =  AppURLRepo.PRINT;
  public share: string  = AppURLRepo.SHARE;

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
    this.loginForm = this.fb.group({
      userId: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  authenticate(){
    this.authService.authenticate('','');
  }

}
