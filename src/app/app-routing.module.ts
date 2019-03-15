import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';

const routes = [
  { path: 'todos', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: ':category', component: ListComponent }
  ] },
  { path: 'new-todo', component: CreateTodoComponent },
  { path: '**', redirectTo: '/todos' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
