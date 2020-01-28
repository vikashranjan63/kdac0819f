import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
cars;
  constructor() { }

  ngOnInit() {
    var carobj = JSON.parse(sessionStorage['selectedcar']);
    console.log(carobj);
    this.cars=carobj;
  }
  

}
