import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rentlist',
  templateUrl: './rentlist.component.html',
  styleUrls: ['./rentlist.component.css']
})
export class RentlistComponent implements OnInit {

  rentslist
  constructor(public service: DataService, public router: Router) { }

  
  ngOnInit() {
  console.log("in service of role");
    let resultset = this.service.rentlist();
resultset.subscribe((data) => {
  this.rentslist = data;
  console.log(this.rentslist);
});
  }
}