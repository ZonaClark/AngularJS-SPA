import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';
import { ItemComponent } from './item/item.component';
import { TodosService } from './todos.service';
import { LogService } from './log.service';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { HeaderComponent } from './header/header.component';


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
    AppRoutingModule,
  ],
  providers: [TodosService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
