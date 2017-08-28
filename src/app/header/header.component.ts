import { Component, OnInit } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  protected logo: string = AppURLRepo.KNOWLEDGE_HUB_LOGO;

  constructor() { }

  ngOnInit() {
  }

}
