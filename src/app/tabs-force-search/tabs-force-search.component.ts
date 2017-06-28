import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-force-search',
  templateUrl: './tabs-force-search.component.html',
  styleUrls: ['./tabs-force-search.component.css']
})
export class TabsForceSearchComponent implements OnInit {
  list = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
