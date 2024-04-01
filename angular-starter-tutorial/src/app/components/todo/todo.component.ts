import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  todos!:Todo[];
  inputTodo:string = "";

  ngOnInit(): void {
    this.todos = [
      
    ]
  }

  toggleDone (id:number) {
    console.log ("id TEST: " + id);
    this.todos.map((item, index) => {
        if(index == id) item.completed = !item.completed;
    })
  }

  deleteTask (id:number) {
    this.todos.splice(id, 1);
  }

  addTask () {
    this.todos.push({content: this.inputTodo, completed: false});
    this.inputTodo="";
  }
}