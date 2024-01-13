import { Component, OnInit, inject } from '@angular/core';

import { Task } from '@models/todo.model';
import { TodoService } from '@services/todo.service';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [],
  templateUrl: './list-task.component.html',
})
export class ListTodoComponent implements OnInit {

  todos!: Task[];

  private todoService = inject(TodoService);

  ngOnInit() {
    console.log('ListTodoComponent initialized');
    this.todos = this.todoService.getTodos();
    console.log(this.todos);
  }

}
