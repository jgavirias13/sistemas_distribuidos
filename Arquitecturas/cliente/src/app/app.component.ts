import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cliente';
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}
  
  ngOnInit() {
    this.getTodos();
  }

  addTodo(todoDescription: string) {
    let todo: Todo = {
      description: todoDescription
    }
    this.todoService.addTodo(todo).subscribe(() => {
      this.getTodos();
    })
  }

  getTodos(){
    this.todoService.getTodos().subscribe((response) => {
      this.todos = response;
    });
  }

  removeTodo(id?:number) {
    if(id != null) {
      this.todoService.removeTodo(id).subscribe(() => {
        this.getTodos();
      });
    }
  }
}
