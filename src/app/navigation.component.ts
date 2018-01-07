import {Component} from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li><a [routerLink]="['/']">Home</a></li>
          <li><a [routerLink]="['/welcome']">Welcome</a></li>
          <li><a [routerLink]="['/todo']">Todo</a></li>
          <li><a [routerLink]="['/wikipedia-search']">Wikipedia Search</a></li>
          <li><a [routerLink]="['/products']">Products List</a></li>
        </ul>
      </div>
    </nav>`,
})
export class NavigationComponent {
}
