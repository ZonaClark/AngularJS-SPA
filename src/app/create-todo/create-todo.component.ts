import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { toDate } from '@angular/common/src/i18n/format_date';

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
  private tdService: TodosService;

  constructor(tdService: TodosService) {
    this.tdService = tdService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    this.tdService.addTodo(submittedForm.value.name, submittedForm.value.category);
  }
}
