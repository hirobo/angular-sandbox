import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-page-search',
  template: `
    <div class="container">
      <app-panel>
        <app-panel-title>Wikipedia search</app-panel-title>
        <app-panel-content>
          <input class="form-control" type="text" [(ngModel)]="keyWord"/>
          <br/>
          <button class="btn btn-primary" (click)="onSearch()">Search!</button>
        </app-panel-content>
      </app-panel>
    </div>
  `,
})
export class SearchComponent {
  public keyWord: string = '';

  constructor(private router: Router) {
  }

  onSearch() {
    this.router.navigate(['wikipedia-search/results', this.keyWord]);
  }

}
