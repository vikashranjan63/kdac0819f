import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-carlistupdate',
  templateUrl: './carlistupdate.component.html',
  styleUrls: ['./carlistupdate.component.css']
})
export class CarlistupdateComponent implements OnInit {


  constructor(public service: DataService, public router: Router) { }
  brand:any;
  type:any;
  stock:any;
  model:any;
  seatquantity: any;
  fueltype:any;
  mileage:any;
  dailyprice:any;
  id:any;
  obj;
  ngOnInit() {
   this.display();

  }

  display()
  {

    this.obj = JSON.parse(sessionStorage['ToBeEdited']);
    console.log(this.obj);
    this.brand = this.obj.Brand;
    this.type = this.obj.Type;
    this.stock = this.obj.Stock;
    this.model = this.obj.Model;
    this.seatquantity = this.obj.SeatQuantity;
    this.fueltype = this.obj.FuelType;
    this.mileage = this.obj.Mileage;
    this.dailyprice = this.obj.DailyPrice;
    this.id = this.obj.CarId;
  }

  saveEditedData()
  {

    console.log(this.id);
    let resultset = this.service.saveData(this.id, this.brand, this.type, this.stock, this.model, this.seatquantity, this.fueltype,this.mileage,this.dailyprice);
    resultset.subscribe((data: any) => {
      alert("Updated Successfully!!!");
      this.router.navigate(['/dashboard/carlist']);
    });
  }

}

