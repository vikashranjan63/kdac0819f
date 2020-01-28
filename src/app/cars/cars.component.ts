import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-cars",
  templateUrl: "./cars.component.html",
  styleUrls: ["./cars.component.css"]
})
export class CarsComponent implements OnInit {
  carslist
  constructor(public service: DataService, public router: Router) {}

  ngOnInit() {
    console.log("in service of role");
    let resultset = this.service.Carlist();
    resultset.subscribe((data) => {
      this.carslist = data;
      console.log(this.carslist);
    });
  }
  SelectCar(p)
  {
    console.log(p);
    sessionStorage['mydata']=JSON.stringify(p);
    alert(["inside select car function"]);
    this.router.navigate(['/signIn'])
  }
  
}
