import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output()
  onPressEnter: EventEmitter<string> = new EventEmitter();

  onPressEnterAction(myInputRef: HTMLInputElement, event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onPressEnter.emit(myInputRef.value);
      console.log(event);
      // alert(myInputRef.value);
      myInputRef.value = '';
    }
  }
}
