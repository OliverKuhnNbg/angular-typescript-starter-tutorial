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
        completed: false
      },
      {
        content: "task 2",
        completed: false
      },
      {
        content: "task 3",
        completed: false
      },
      {
        content: "task 4",
        completed: false
      },
    ]
  }

  toggleDone (id:number) {
    console.log ("id TEST: " + id);
    // this.todos.map((item, index) => {
    //     if(index == id) item.completed = !item.completed;

    //     return item
    // })
  }
}