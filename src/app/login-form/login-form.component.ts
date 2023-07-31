import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(2)]],
    password: ['', Validators.required],
    moreInfo: this.fb.group({
      name: '',
    }),
    locations: this.fb.array([]),
  });

  addLocation() {
    const newLocationFormGroup = this.fb.group({
      latitude: [''],
      longitude: [''],
    });
    this.locations.push(newLocationFormGroup);
  }

  get locations() {
    return this.loginForm.controls['locations'] as FormArray;
  }

  getControl() {}

  onLogin() {
    console.log(this.loginForm.value);
  }

  get userNameField() {
    return this.loginForm.get('username');
  }
}
