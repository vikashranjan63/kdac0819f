import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paydet',
  templateUrl: './paydet.component.html',
  styleUrls: ['./paydet.component.css']
})
export class PaydetComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  logout() {
    console.log("logout");
    sessionStorage.clear();
    delete sessionStorage["Userid"];
    this.router.navigate(["/signin"]);
  }

}
