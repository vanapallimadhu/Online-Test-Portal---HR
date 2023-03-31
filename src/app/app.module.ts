import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { welcomecomponent } from './welcome/welcome.component';
import { questioncomponent } from './question/question.component';
import { headercomponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { changebgDirective } from './change-bg.directive';

@NgModule({
  declarations: [
    AppComponent,
    welcomecomponent,
    questioncomponent,
    headercomponent,
    changebgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
