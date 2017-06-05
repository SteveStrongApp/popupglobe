import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CesiumService } from 'angular-cesium/src/services/cesium/cesium.service';
import { AngularCesiumModule } from 'angular-cesium/src/angular-cesium.module';
import { ViewerConfiguration } from 'angular-cesium/src/services/viewer-configuration/viewer-configuration.service';


import { AppComponent } from './app.component';
import { GlobeComponent } from './globe/globe.component';



@NgModule({
  declarations: [
    AppComponent,
    GlobeComponent
  ],
  imports: [
    AngularCesiumModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CesiumService, ViewerConfiguration],
  bootstrap: [AppComponent]
})
export class AppModule { }
