import './rxjs-operators';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {SearchService} from './search.service';

import {AppComponent} from './app.component';
import {LandingComponent} from './pages/landing.component';
import {NavigationComponent} from './navigation.component';
import {NotFoundComponent} from './pages/not-found.component';
import {ResultsComponent} from './pages/wikipedia-results.component';
import {SearchComponent} from './pages/wikipedia-search.component';
import {TodoComponent} from './pages/todo.component';
import {SelectComponent} from './select.component';
import {TodoAddComponent} from './todo-add.component';
import {PanelModule} from './panel/panel.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    NotFoundComponent,
    ResultsComponent,
    SearchComponent,
    SelectComponent,
    TodoComponent,
    TodoAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule,
    RouterModule.forRoot([
      {path: '', component: LandingComponent, data: {title: 'Angular sandbox demo page'}},
      {path: 'wikipedia-search', component: SearchComponent, data: {title: 'Wikipedia search'}},
      {path: 'wikipedia-search/results/:search', component: ResultsComponent, data: {title: 'Wikipedia search result'}},
      {path: 'todo', component: TodoComponent, data: {title: 'Todo'}},
      {path: '**', component: NotFoundComponent, data: {title: 'Page not found'}}
    ], {
      useHash: true
    })
  ],
  providers: [
    SearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
