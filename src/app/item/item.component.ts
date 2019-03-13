import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() todoItem;
  tdService: TodosService;

  constructor(tdService: TodosService) {
    this.tdService = tdService;
  }

  ngOnInit() {
  }

  onAssign(itemCategory) {
    this.tdService.onSideChosen({ todo: this.todoItem.todo, category: itemCategory });
  }
}
