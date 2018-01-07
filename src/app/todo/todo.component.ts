import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-page-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css']
})

export class TodoComponent {

  todos = [
    new Todo('Angular', 'high'),
    new Todo('Quantum theory', 'low'),
    new Todo('Machine learning', 'medium'),
  ];

  getClassesForTodo(todo: Todo) {
    return {
      'list-group-item': true,
      'list-group-item-danger': todo.urgency === 'high',
    };
  }

  getStyle(todo: Todo) {
    return {
      'font-weight': (todo.urgency === 'high' ? 'bold' : 'normal')
    };
  }

}
