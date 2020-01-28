import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
cities;
  constructor(private service: DataService,public router:Router) { }

  ngOnInit() {
    console.log("in service of city");
    let resultset = this.service.city();
    resultset.subscribe((data) => {
      this.cities = data;
      console.log(this.cities);
    });
  }
Search(myForm)
{
  window.alert("Welcome");
  this.router.navigate(['cars']);
}


}
