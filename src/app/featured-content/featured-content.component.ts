import { Component, Input, OnInit } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';

@Component({
  selector: 'app-featured-content',
  templateUrl: './featured-content.component.html',
  styleUrls: ['./featured-content.component.scss']
})
export class FeaturedContentComponent implements OnInit {

  public downloadIcon: string = AppURLRepo.DOWNLOAD;

  public featuredIcon: string = AppURLRepo.FEATURED;

  @Input()
  public stacked: boolean;

  constructor() { }

  ngOnInit() {
  }

}
