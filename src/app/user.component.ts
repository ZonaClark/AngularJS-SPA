import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" [(ngModel)]="name">
    <p>Hello {{ name }}!</p>
    <p>User Component</p>
  `
})
export class UserComponent {
  name = "max";

  onUserInput(event) {
    this.name = event.target.value;
  }
}
