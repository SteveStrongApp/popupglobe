import { Component } from '@angular/core';
import { EmitterService } from '../common/emitter.service';

@Component({
  selector: 'button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.css']
})

export class ButtonPanelComponent {

  doPopup() {
    EmitterService.get("SHOWSUCCESS").emit({ 
      title: 'hello', 
      message: "you pressed it" 
    });
  }
}