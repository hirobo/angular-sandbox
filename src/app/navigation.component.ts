import {Component} from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            <a routerLink="/">Home</a>
          </li>
          <li routerLinkActive="active">
            <a routerLink="/wikipedia-search">Search</a>
          </li>
          <li routerLinkActive="active">
            <a routerLink="/todo">ToDo</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
})
export class NavigationComponent {
}
