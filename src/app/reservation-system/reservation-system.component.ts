import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-system',
  templateUrl: './reservation-system.component.html',
  styleUrls: ['./reservation-system.component.css']
})
export class ReservationSystemComponent implements OnInit {

  reservationlist
  constructor(public service: DataService, public router: Router) { }

  ngOnInit() {
    console.log("in service of role");
    let resultset = this.service.reslist();
    resultset.subscribe((data) => {
      this.reservationlist = data;
      console.log(this.reservationlist);
    });
  }
}
