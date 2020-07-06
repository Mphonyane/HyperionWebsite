import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {
  NgBootstrapFormValidationModule,
  CUSTOM_ERROR_MESSAGES
} from "ng-bootstrap-form-validation";

import { HttpClientModule } from '@angular/common/http';

import {CUSTOM_ERRORS} from "./contact-form";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    HttpClientModule
  ],
  providers: [{
    provide: CUSTOM_ERROR_MESSAGES,
    useValue: CUSTOM_ERRORS,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
