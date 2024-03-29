import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ListTodoComponent } from '@components/list-task/list-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListTodoComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'AngularTodoApp';
}
