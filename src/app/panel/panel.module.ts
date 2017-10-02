import {PanelTitleComponent} from './panel-title.component';
import {PanelContentComponent} from './panel-content.component';
import {PanelComponent} from './panel.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    PanelComponent,
    PanelContentComponent,
    PanelTitleComponent
  ],
  exports: [
    PanelComponent,
    PanelContentComponent,
    PanelTitleComponent
  ]
})

export class PanelModule {
}
