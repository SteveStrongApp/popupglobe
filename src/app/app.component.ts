import { Component } from '@angular/core';
import { ViewerConfiguration } from 'angular-cesium/src/services/viewer-configuration/viewer-configuration.service';


// export enum ActionType {
//     ADD_UPDATE,
//     DELETE
// }

// export class AcNotification {
//     id: number;
//     entity?: AcEntity;
//     actionType: ActionType;
// }


//https://cesiumjs.org/Cesium/Build/Documentation/Viewer.html

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the globe and bootstrap';

	constructor(viewerConf: ViewerConfiguration) {
		viewerConf.viewerOptions = {
      homeButton: false,
      fullscreenButton: false,
      selectionIndicator: false,
      infoBox: false,
			timeline: false,
      navigationHelpButton: false,
//Hide the base layer picker
    baseLayerPicker : false,
    //Start in Columbus Viewer
    //sceneMode : Cesium.SceneMode.COLUMBUS_VIEW,
		};
	}

}
