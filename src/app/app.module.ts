import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { BackgroundComponent } from './background/background.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { PrefixPipe } from './prefix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TodoListComponent,
    BackgroundComponent,
    FormsComponent,
    LoginFormComponent,
    PrefixPipe,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
