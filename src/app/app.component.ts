import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';

  toDoList: Array<string> = [];
  inputButtonClick(myInputRef: HTMLInputElement) {
    this.addTask(myInputRef.value);
    console.log(this.toDoList);
  }

  addTask(task: string) {
    this.toDoList.push(task);
  }

  removeTask(task: string) {
    this.toDoList = this.toDoList.filter((item) => item !== task);
  }
  
  onEventRecieved(event: string) {
    this.addTask(event);
  }
}
