import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SearchService} from '../search.service';
import {SearchResult} from '../search-result';

@Component({
  selector: 'app-page-wikipedia-results',
  template: `
    <div class="container">
      Result for: {{ search }}
      <br />
      <div *ngFor="let result of results">
        <app-panel>
          <app-panel-title>{{ result.title }}</app-panel-title>
          <app-panel-content>
            <div [innerHTML]="result.snippet"></div>
          </app-panel-content>
        </app-panel>
      </div>
    </div>
  `,
})
export class ResultsComponent implements OnInit {

  search: string;
  results: SearchResult[];

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.search = params['search'];
      this.results = [];
      this.searchService.search(this.search)
        .forEach((item: SearchResult) => {
        this.results.push(item);
      });
    })
  }

}
