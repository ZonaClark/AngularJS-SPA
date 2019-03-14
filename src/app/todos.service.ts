import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';

@Injectable()
export class TodosService {
  private todos = [
    { todo: 'learn Angular', category: '' },
    { todo: 'do laundry', category: '' }
  ];
  private logService: LogService;
  todosChanged = new Subject<void>();
  http: Http;

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }

  fetchTodos() {

  }

  getTodos(choosenCategory) {
    if (choosenCategory === 'all') {
      return this.todos.slice();
    }
    return this.todos.filter((todo) => {
      return todo.category === choosenCategory;
    });
  }

  onSideChosen(todoInfo) {
    const pos = this.todos.findIndex((todo) => {
      return todo.todo === todoInfo.todo;
    });
    this.todos[pos].category = todoInfo.category;
    this.todosChanged.next();
    this.logService.writeLog(todoInfo.category);
  }

  addTodo(name, todoCategory) {
    const pos = this.todos.findIndex((todo) => {
      return todo.todo === name;
    })
    if (pos !== -1) {
      return;
    }
    const newTodo = {todo: name, category: todoCategory};
    this.todos.push(newTodo);
  }
}
