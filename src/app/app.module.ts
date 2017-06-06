import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ButtonPanelComponent } from './button-panel.component';
import { AngularCesiumModule } from 'angular-cesium/src/angular-cesium.module';



@NgModule({
  declarations: [
    AppComponent, 
    ButtonPanelComponent
  ],
  imports: [
    AngularCesiumModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
