import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardHoverEffeects1Component } from './components/card-hover-effeects1/card-hover-effeects1.component';
import { LoginAnimadoComponent } from './components/login-animado/login-animado.component';
import { Login2Component } from './components/login2/login2.component';


@NgModule({
  declarations: [
    AppComponent,
    CardHoverEffeects1Component,
    LoginAnimadoComponent,
    Login2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
