import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() todos;
  @Output() sideAssigned = new EventEmitter<{todo: string, category: string}>();

  constructor() { }

  ngOnInit() {
  }

  onSideAssigned(todoInfo) {
    this.sideAssigned.emit(todoInfo);
  }
}
