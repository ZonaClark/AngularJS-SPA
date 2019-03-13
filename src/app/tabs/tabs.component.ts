import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  todos = [
    { todo: 'learn Angular', category: '' },
    { todo: 'do laundry', category: '' }
  ];
  choosenCategory = 'all';

  constructor() { }

  ngOnInit() {
  }

  onClick(todoItemCategory) {
    this.choosenCategory = todoItemCategory;
  }

  getTodos() {
    if (this.choosenCategory === 'all') {
      return this.todos.slice();
    }
    return this.todos.filter((todo) => {
      return todo.category === this.choosenCategory;
    });
  }

  onSideChosen(todoInfo) {
    const pos = this.todos.findIndex((todo) => {
      return todo.todo === todoInfo.todo;
    });
    this.todos[pos].category = todoInfo.category;
  }
}
