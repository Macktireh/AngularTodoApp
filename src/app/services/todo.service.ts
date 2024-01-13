import { Injectable } from '@angular/core';
import { Todo } from '@models/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Todo[] {
    return [
      {
        id: 1,
        title: 'Learn TypeScript',
        description: 'Learn TypeScript and build amazing apps with it.',
        completed: false
      },
      {
        id: 2,
        title: 'Learn Angular',
        description: 'Learn Angular from scratch and build amazing apps with it.',
        completed: false
      },
      {
        id: 3,
        title: 'Learn React',
        description: 'Learn React from scratch and build amazing apps with it.',
        completed: true
      }
    ];
  }
}
