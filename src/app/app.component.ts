import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoDataService],
})

export class AppComponent {

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) { }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo;
  }


  toggleTodoComplete(todo: any) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo:any) {
    this.todoDataService.deleteTodoById(todo.id)
  }

  get todos() {
    return this.todoDataService.getAllTodos()
  }

}
