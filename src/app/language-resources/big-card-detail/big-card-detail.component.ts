import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card-detail',
  templateUrl: './big-card-detail.component.html',
  styleUrls: ['./big-card-detail.component.css']
})
export class BigCardDetailComponent implements OnInit {
@Input() claPerson;
  constructor() { }

  ngOnInit() {
  }

}
