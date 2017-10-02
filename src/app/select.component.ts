import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  template: `
    <div class="dropdown">
      <button class="btn btn-default dropdown-toggle"
              (click)="dropDownOpend = !dropDownOpend">
        {{ buttonLabel }}
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" style="display: block;" *ngIf="dropDownOpend">
        <li *ngFor="let option of options">
          <a (click)="onClickOption(option)">{{ option }}</a>
        </li>
      </ul>
    </div>
  `,
})
export class SelectComponent {
  dropDownOpend = false;
  buttonLabel = "-- please select ---";

  @Input() options: String[];
  @Output() onChange = new EventEmitter();

  onClickOption(clickOption: string) {
    this.buttonLabel = clickOption;
    this.dropDownOpend = false;
    this.onChange.emit(clickOption);
  }
}
