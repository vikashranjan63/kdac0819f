import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public router: Router, public http: HttpClient) { }
  Login(credentials: any) {
    return this.http.post("http://localhost:52278/api/Login", credentials);
  }
  AddUser(Userdata: any) {
    console.log("service "+Userdata);
    return this.http.post("http://localhost:52278/api/Registration", Userdata);
  }
  AddCars(Cardata: any) {
    console.log("service " + Cardata);
    return this.http.post("http://localhost:52278/api/Car/addcar", Cardata);
  }
  AllRoles() {
    console.log("service ");
    return this.http.get("http://localhost:52278/api/Roles");
  }

 EditCar(id:any){
   return this.http.get("http://localhost:52278/api/Car/"+id);
 }

  saveData(id,brand,type,stock,model,seatquality,fueltype,milege,dailyprice)
  {
    var updatecar = {
      "Brand":brand,
      "Type":type,
      "Stock":stock,
      "Model":model,
      "SeatQuantity":seatquality,
      "FuelType":fueltype,
      "Mileage":milege,
      "DailyPrice":dailyprice
    }
    return this.http.put("http://localhost:52278/api/Car/" + id,updatecar);
  }

  Carlist() {
    console.log("service ");
    return this.http.get("http://localhost:52278/api/Car");
  }
  reslist() {
    console.log("service ");
    return this.http.get("http://localhost:52278/api/Reservation");
  }
  rentlist() {
    console.log("service ");
    return this.http.get("http://localhost:52278/api/Rent");
  }

  SearchCar(Car:any)
  {
    var Cardata={
      "CarId":Car
    }
    return this.http.post("http://localhost:52278/api/Car/Findcar",Cardata);
  }

  city() {
    console.log("service ");
    return this.http.get("http://localhost:52278/api/Address");
  }

  PassChLog() {
    console.log("service ");
    return this.http.get("http://localhost:52278/api/passhistory");
  }

  UsersData()
  {
    console.log("service ");
    return this.http.get("http://localhost:52278/api/Users");
  }

  passhis() {
   
    return this.http.get("http://localhost:52278/api/passhistory");
  }
  OTPGenerate(email) {
    alert("inside OTPGenerate ");
    var RUser = {
      "EmailId": email,

    };

    return this.http.post(`http://localhost:52278/api/IsExist`, RUser);
  }
  OTPValidate(otp, email) {

    alert("inside validateOTP");
    var RUser = {
      "EmailId": email,
      "OTP": otp
    };


    console.log(RUser);

    return this.http.post(`http://localhost:52278/api/OTP`, RUser);
  }

  Passwordreset(password, email) {

    alert("inside validateOTP");
    var RUser = {
      "EmailId": email,
      "Password": password,

    };

    console.log(RUser);

    return this.http.put(`http://localhost:52278/api/UpdatePassword`, RUser);
  }
}



