import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { ActionType } from 'angular-cesium/src/models/action-type.enum';
import { AcNotification } from 'angular-cesium/src/models/ac-notification';
import { AcLayerComponent } from 'angular-cesium/src/components/ac-layer/ac-layer.component';


@Component({
	selector: 'arc-layer',
	templateUrl: 'arc-layer.component.html'
})

export class ArcLayerComponent implements OnInit, AfterViewInit {
	arcs$: Observable<AcNotification>;
	show = true;
	@ViewChild(AcLayerComponent) layer: AcLayerComponent;

	constructor() {
	}

	ngOnInit(): void {
		const arcArray = [];
		for (let i = 0; i < 1000; i++) {
			let randCenter = Cesium.Cartesian3.fromDegrees(Math.random() * 90 - 40, Math.random() * 90 - 40);
			let randomDelta = Math.PI;
			let randomRadius = Math.random() * 1000000;
			let randomAngle = Math.random() * 3 - 1;
			arcArray.push({
				id: i,
				actionType: ActionType.ADD_UPDATE,
				entity: {
					angle: randomAngle,
					delta: randomDelta,
					radius: randomRadius,
					name: 'base haifa',
					center: randCenter,
					color: Cesium.Color.RED
				}
			})
		}

		this.arcs$ = Observable.from(arcArray);
	}

	ngAfterViewInit(): void {
	}

	removeAll() {
		//do nothing
	}

	setShow($event) {
		this.show = $event
	}
}