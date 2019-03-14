import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  todos = [];
  activatedRoute: ActivatedRoute;
  tdService: TodosService;
  chosenCategory = 'all';
  subscription;

  constructor(activatedRoute: ActivatedRoute, tdService: TodosService) {
    this.activatedRoute = activatedRoute;
    this.tdService = tdService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.todos = this.tdService.getTodos(params.category);
        this.chosenCategory = params.category;
      }
    );
    this.subscription = this.tdService.todosChanged.subscribe(
      () => {
        this.todos = this.tdService.getTodos(this.chosenCategory);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
