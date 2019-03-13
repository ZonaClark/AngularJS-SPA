import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  todos = [];
  choosenCategory = 'all';
  tdService: TodosService;

  constructor(tdService: TodosService) {
    this.tdService = tdService;
  }

  ngOnInit() {
  }

  onClick(todoItemCategory) {
    this.choosenCategory = todoItemCategory;
  }

  getTodos() {
    this.todos = this.tdService.getTodos(this.choosenCategory);
    return this.todos;
  }

}
