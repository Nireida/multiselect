import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MultyElementComponent } from './multy-element/multy-element.component';
import {FormsModule} from "@angular/forms";
import { SelectedElementsComponent } from './selected-elements/selected-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    MultyElementComponent,
    SelectedElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
