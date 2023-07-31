import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  isClicked: boolean = false;
  @Input()
  todoName: string = '';
  
  @Output()
  removeItemEvent = new EventEmitter<string>();

  removeItem() {
    this.removeItemEvent.emit(this.todoName);
  }
  taskCompleted() {
    this.isClicked = !this.isClicked;
  }
  getTime() {
    //return just time
    return this.formatAMPM(new Date());
  }

  formatAMPM(date: Date) {
    var hours = date.getHours();
    var minutes: any = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

}
