import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PasswordInputComponent} from './components/password-input/password-input.component';
import {PasswordStrengthService} from './services/password-strength/password-strength.service';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PasswordStrengthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
