import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Logs } from 'selenium-webdriver';

@Injectable()
export class TodosService {
  private todos = [
    { todo: 'learn Angular', category: '' },
    { todo: 'do laundry', category: '' }
  ];
  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
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
