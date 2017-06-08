import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { ButtonPanelComponent } from './panels/button-panel.component';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { CesiumService } from 'angular-cesium/src/services/cesium/cesium.service';

import { AngularCesiumModule } from 'angular-cesium/src/angular-cesium.module';
import { ViewerConfiguration } from 'angular-cesium/src/services/viewer-configuration/viewer-configuration.service';


import { AppComponent } from './app.component';
import { GlobeComponent } from './globe/globe.component';
import { GlobeService } from './globe/globe.service';
import { ArcLayerComponent } from "./arc-layer/arc-layer.component";
import { SidepanelComponent } from './sidepanel/sidepanel.component';


@NgModule({
  declarations: [

    AppComponent, 
    ButtonPanelComponent,
    ArcLayerComponent,
    GlobeComponent,
    SidepanelComponent

  ],
  imports: [
    BrowserAnimationsModule,
    ToastModule.forRoot(),

    AngularCesiumModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CesiumService, GlobeService, ViewerConfiguration],
  bootstrap: [AppComponent]
})
export class AppModule { }
