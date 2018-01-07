import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WikipediaSearchComponent } from './wikipedia-search.component';
import { WikipediaResultsComponent } from './wikipedia-results.component';
import { SearchService } from './search.service';
import { SharedModule } from '../shared/shared.module';
import { PanelModule } from '../panel/panel.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'wikipedia-search', component: WikipediaSearchComponent, data: {title: 'Wikipedia search'}},
      {
        path: 'wikipedia-search/results/:search',
        component: WikipediaResultsComponent,
        data: {title: 'Wikipedia search result'}
      }
    ]),
    PanelModule,
    SharedModule
  ],
  declarations: [
    WikipediaSearchComponent,
    WikipediaResultsComponent
  ],
  providers: [
    SearchService,
  ]

})
export class WikipediaSearchModule { }
