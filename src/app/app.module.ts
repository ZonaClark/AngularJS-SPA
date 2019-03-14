import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';
import { ItemComponent } from './item/item.component';
import { TodosService } from './todos.service';
import { LogService } from './log.service';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { HeaderComponent } from './header/header.component';

const routes = [
  { path: 'todos', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: ':category', component: ListComponent }
  ] },
  { path: 'new-todo', component: CreateTodoComponent },
  { path: '**', redirectTo: '/todos' },
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TabsComponent,
    ItemComponent,
    CreateTodoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [TodosService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
