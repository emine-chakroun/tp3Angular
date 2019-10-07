import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import { ListPersonnesComponent } from './list-personnes/list-personnes.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    ListPersonnesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
