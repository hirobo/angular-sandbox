import {Todo} from './todo';
import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo-add',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">
          <strong>Add Todo</strong>
        </h3>
      </div>
      <div class="panel-body">
        <p>You can add a new todo!</p>
        <div class="form-group">
          <label>Title:</label>
          <input type="text" class="form-control" [(ngModel)]="todo.title">
        </div>
        <div class="form-group">
          <label>Priority:</label>
          <select class="form-control" [(ngModel)]="todo.urgency">
            <option>high</option>
            <option>medium</option>
            <option>low</option>
          </select>
        </div>
      </div>
      <div class="panel-footer">
        <button class="btn btn-primary" (click)="onSubmitTodo()">Add</button>
      </div>
    </div>
  `,
})
export class TodoAddComponent {
  todo = new Todo();

  @Output() onTodoAdd = new EventEmitter<Todo>();

  onSubmitTodo() {
    this.onTodoAdd.emit(this.todo);
    this.todo = new Todo();
  };
}
