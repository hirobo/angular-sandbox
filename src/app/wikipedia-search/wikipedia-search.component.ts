import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-search',
  templateUrl: './wikipedia-search.component.html',
})
export class WikipediaSearchComponent {
  public keyWord = '';

  constructor(private router: Router) {
  }

  onSearch() {
    this.router.navigate(['wikipedia-search/results', this.keyWord]);
  }

}
