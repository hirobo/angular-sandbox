import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {SearchResult} from './search-result';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SearchService {
  constructor(
    private http: Http,
  ) {}

  public search(term: string): Observable<SearchResult>{
    let url = new URLSearchParams('https://de.wikipedia.org/w/api.php?');
    url.set('action', 'query');
    url.set('list', 'search');
    url.set('srsearch', term);
    url.set('format', 'json');
    url.set('origin', '*');

    return this.http.get(url.toString())
      .map((response: Response) => {
        return response.json()['query']['search'];
      })
      .map((results: any) => {
        var items: SearchResult[] = [];
        for(let result of results) {
          items.push(new SearchResult(result['title'], result['snippet']));
        }
        return items;
      })
      .mergeMap((items: SearchResult[]) => {
        return items;
      });

  }

}
