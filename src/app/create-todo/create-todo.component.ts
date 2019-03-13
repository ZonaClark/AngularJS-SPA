import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  availableCategory = [
    { display: 'None', value: '' },
    { display: 'Work', value: 'work' },
    { display: 'Personal', value: 'personal' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
