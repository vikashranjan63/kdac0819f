import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {


carslist
  constructor(public service:DataService,public router:Router) { }

  ngOnInit() {
  
  console.log("in service of role");
    let resultset = this.service.Carlist();
  resultset.subscribe((data) => {
  this.carslist = data;
  console.log(this.carslist);
});
  }

  getcar(id: any) {
    console.log(id);
    let resultSet = this.service.EditCar(id);
    resultSet.subscribe((data: any) => {
      console.log(data.Data);
      sessionStorage['ToBeEdited'] = JSON.stringify(data.Data);
      this.router.navigate(['/editcar']);
    });
  }

}
