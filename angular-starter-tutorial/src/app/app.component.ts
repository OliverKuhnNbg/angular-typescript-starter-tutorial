import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { MyFormComponent } from './components/my-form/my-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoComponent, MyFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular 17 - ToDo App';
}
