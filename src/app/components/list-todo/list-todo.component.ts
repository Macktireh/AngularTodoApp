import { Component, OnInit, inject } from '@angular/core';
import { Todo } from '@models/todo';

import { TodoService } from '@services/todo.service';

@Component({
  selector: 'app-list-todo',
  standalone: true,
  imports: [],
  templateUrl: './list-todo.component.html',
})
export class ListTodoComponent implements OnInit {

  todos!: Todo[];

  private todoService = inject(TodoService);

  ngOnInit() {
    console.log('ListTodoComponent initialized');
    this.todos = this.todoService.getTodos();
    console.log(this.todos);
  }

}
