import { Component, OnInit } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public cphaLogo: string = AppURLRepo.CPHA_LOGO;
  private currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
