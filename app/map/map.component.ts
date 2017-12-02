import { Component, OnInit } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'map',
  templateUrl: 'map.component.html'

})
export default class MapComponent implements OnInit {
  public lat: number = -32.9477132;
  public lng: number = -60.630465800000025;

  constructor(){

  }

  ngOnInit(){

  }

}
