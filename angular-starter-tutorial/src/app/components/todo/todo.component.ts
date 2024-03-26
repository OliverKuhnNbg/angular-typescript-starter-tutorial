import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  todos!:Todo[];

  ngOnInit(): void {
    this.todos = [
      {
        content: "task 1",
        completed: true
      },
      {
        content: "task 2",
        completed: true
      },
      {
        content: "task 3",
        completed: true
      },
      {
        content: "task 4",
        completed: true
      },
    ]
  }
}
