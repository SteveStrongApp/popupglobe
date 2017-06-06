import { Component, OnInit } from '@angular/core';

import { CesiumService } from 'angular-cesium/src/services/cesium/cesium.service';
import { ViewerConfiguration } from 'angular-cesium/src/services/viewer-configuration/viewer-configuration.service';
import { GlobeService } from "./globe.service";

@Component({
  selector: 'app-globe',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.css']
})
export class GlobeComponent implements OnInit {
  geojson: any;


  constructor(private service: GlobeService) {
  }

  ngOnInit() {
    // this.service && this.service.getRegions(result => {
    //   this.geojson = result;
    // });
  }

  doDrawRegions() {
    this.service.getRegions().subscribe(n => {
      this.geojson = n;
      console.log(this.geojson)
    });
  }
}
