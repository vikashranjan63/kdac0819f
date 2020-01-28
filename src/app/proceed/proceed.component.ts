import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proceed',
  templateUrl: './proceed.component.html',
  styleUrls: ['./proceed.component.css']
})
export class ProceedComponent implements OnInit {
cars;
  submitted=false;
  cselect;
  constructor(private service:DataService,public router:Router) { }

  ngOnInit() {
    var carobj=JSON.parse(sessionStorage['mydata']);
    console.log(carobj);
    this.cars=carobj;
  }

  FindCar(search)
  {
    alert("Welcome");
    console.log(search);
    let resultState=this.service.SearchCar(search);
    resultState.subscribe((data:any)=>{
      if(data.Status=="Success")
      {
        sessionStorage['carObject']=JSON.stringify(data.Data);
        console.log(sessionStorage['carObject']);
        console.log(data);
        this.submitted=true;
        alert("done"+data);
        this.cselect=data;
        this.router.navigate(['/bookcar']);
      }
      else
      {
        console.log(data);
        alert("No Hotel available...");
        this.router.navigate(['/payment']);
      }
    });
  }

}
