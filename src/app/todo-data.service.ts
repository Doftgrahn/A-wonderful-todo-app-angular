
// Logic for handling the Todo-items.
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  //placeholder or a state i'm gonna use later.
  lastId: number = 0;

  //placeholder,array for items we're gonna enter.
  todos: Todo[] = [];

  constructor() { }

  //Simulaste POST
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  //Simulaste DELETE

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }
//update Todo
  updateById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }
  //Get all Todos

  getAllTodos(): Todo[] {
    return this.todos;
  }
//get them by Id


  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  //Toggle everything

  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
