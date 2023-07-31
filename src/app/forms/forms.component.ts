import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  constructor() {}

  onSubmit(formData: NgForm) {
    console.log(formData);
    if (formData.valid) {
      console.log('submitted');
    }
  }
}
