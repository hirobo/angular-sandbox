import {Component} from '@angular/core';

@Component({
  selector: 'app-panel-title',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
})

export class PanelTitleComponent {

}
