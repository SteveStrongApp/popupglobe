import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../common/emitter.service';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showCOCOM() {
    EmitterService.get("SHOWERROR").emit({ 
      title: 'hello', 
      message: "you pressed it" 
    });
  }

}
