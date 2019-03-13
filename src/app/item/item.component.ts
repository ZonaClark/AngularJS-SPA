import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem;
  @Output() sideAssigned = new EventEmitter<{todo: string, category: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAssign(itemCategory) {
    this.sideAssigned.emit({todo: this.todoItem.todo, category: itemCategory});
  }
}
