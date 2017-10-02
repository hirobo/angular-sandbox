import {Component} from '@angular/core';

@Component({
  selector: 'app-panel',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">
          <ng-content select="app-panel-title"></ng-content>
        </h3>
      </div>
      <div class="panel-body">
        <ng-content select="app-panel-content"></ng-content>
      </div>
    </div>
  `,
})

export class PanelComponent {
}
