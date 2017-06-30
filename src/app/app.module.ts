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
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { R1headerComponent } from './r1header/r1header.component';
import { TabsForceSearchComponent } from './tabs-force-search/tabs-force-search.component';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { PictureComponentComponent } from './picture-component/picture-component.component';
import { SearchresultsAnalyticsComponent } from './searchresults-analytics/searchresults-analytics.component';


@NgModule({
  declarations: [

    AppComponent, 
    ButtonPanelComponent,
    ArcLayerComponent,
    GlobeComponent,
    SidepanelComponent,
    HeaderComponent,
    NavComponent,
    R1headerComponent,
    TabsForceSearchComponent,
    MiniCardComponent,
    PictureComponentComponent,
    SearchresultsAnalyticsComponent

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
