import { Component, OnInit } from '@angular/core';

import { CesiumService } from 'angular-cesium/src/services/cesium/cesium.service';
import { ViewerConfiguration } from 'angular-cesium/src/services/viewer-configuration/viewer-configuration.service';


@Component({
  selector: 'app-globe',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.css']
})
export class GlobeComponent implements OnInit {

  constructor(private _ces: CesiumService, private _config: ViewerConfiguration) {


  }

  ngOnInit() {
    this._config.viewerOptions = {
      homeButton: false,
      timeline: false
    };
  }

  doMorph() {
    //this._ces.morphTo2D(10);
  }
}
