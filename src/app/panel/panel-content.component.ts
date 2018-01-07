import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-content',
  template: `
    <div>
      <ng-content></ng-content>
    </div>    `,
})

export class PanelContentComponent {

}
