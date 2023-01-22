import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardHoverEffeects1Component } from './components/card-hover-effeects1/card-hover-effeects1.component';
import { LoginAnimadoComponent } from './components/login-animado/login-animado.component';

@NgModule({
  declarations: [
    AppComponent,
    CardHoverEffeects1Component,
    LoginAnimadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
