import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caraddlist',
  templateUrl: './caraddlist.component.html',
  styleUrls: ['./caraddlist.component.css']
})
export class CaraddlistComponent implements OnInit {

  cars;
  constructor(public service: DataService, public router: Router) { }
  

  ngOnInit()
   {
  }
  Add(myForm) {
    let data = myForm.form.value;
    console.log(data);
    this.service.AddCars(data).subscribe(() => {
      window.alert("Added Sussfully...!");
      this.router.navigate(['/dashboard/carlist']);
    }
    )
  }

}


