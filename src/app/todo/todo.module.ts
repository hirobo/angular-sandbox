import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoSelectComponent } from './todo-select.component';
import { TodoAddComponent } from './todo-add.component';
import { PanelModule } from '../panel/panel.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'todo', component: TodoComponent, data: {title: 'Todo'}},
    ]),
    PanelModule,
    SharedModule
  ],
  declarations: [
    TodoComponent,
    TodoSelectComponent,
    TodoComponent,
    TodoAddComponent,
  ],
  providers: [

  ],

})
export class TodoModule { }
