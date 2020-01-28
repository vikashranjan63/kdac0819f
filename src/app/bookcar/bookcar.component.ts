import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookcar',
  templateUrl: './bookcar.component.html',
  styleUrls: ['./bookcar.component.css']
})
export class BookcarComponent implements OnInit {
cars;
  constructor(private service:DataService,public router:Router) { }

  ngOnInit() {
    var carobj=JSON.parse(sessionStorage['carObject']);
    console.log(carobj);
    this.cars=carobj;
  }

}
