import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SearchService } from './search.service';
import { SearchResult } from './search-result';

@Component({
  selector: 'app-page-wikipedia-results',
  templateUrl: './wikipedia-results.component.html',
})

export class WikipediaResultsComponent implements OnInit {

  search: string;
  results: SearchResult[];

  constructor(private route: ActivatedRoute,
              private searchService: SearchService,) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.search = params['search'];
      this.results = [];
      this.searchService.search(this.search)
        .forEach((item: SearchResult) => {
          this.results.push(item);
        });
    });
  }

}
