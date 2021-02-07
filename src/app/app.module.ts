import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MultyElementComponent } from './custom/multy-element/multy-element.component';
import {FormsModule} from "@angular/forms";
import { SelectedElementsComponent } from './custom/selected-elements/selected-elements.component';
import { ElementsPipe } from './elements.pipe';
import {CustomComponent} from "./custom/custom.component";
import { ZorroComponent } from './zorro/zorro.component';
import { StartComponent } from './start/start.component';
import {NgZorroAntdModule, NZ_I18N, en_US, NzTreeModule} from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {KeyNamePipe} from "./key-name.pipe";
import { ErrorPageComponent } from './error-page/error-page.component';
import { SpinnerComponent } from './spinner/spinner.component';

registerLocaleData(en);

const ANT_DESIGN_MODULES = [
  NzTreeModule
];

@NgModule({
  declarations: [
    AppComponent,
    MultyElementComponent,
    SelectedElementsComponent,
    CustomComponent,
    ElementsPipe,
    ZorroComponent,
    StartComponent,
    KeyNamePipe,
    ErrorPageComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ANT_DESIGN_MODULES,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
