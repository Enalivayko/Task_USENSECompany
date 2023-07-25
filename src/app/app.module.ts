import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassFieldComponent } from './components/pass-field/pass-field.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PassFieldComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
