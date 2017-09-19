import { Component, OnInit } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchIcon: string = AppURLRepo.SEARCH_ICON;
  public clearIcon: string = AppURLRepo.SMALL_CROSS;

  public searchForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router) {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit() {
  }

  clearSearch() {
    this.searchForm.controls['search'].setValue(null);
  }

  search() {
    this.searchForm.controls['search'].setValue('cannabis');
    this.router.navigate(['/search']);
  }

}
