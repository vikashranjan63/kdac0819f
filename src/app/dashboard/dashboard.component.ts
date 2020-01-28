import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
  import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

name:any;
id:any;
constructor(public router:Router) { }

  ngOnInit() {
    this.id = sessionStorage.getItem("Userid");
    this.name = sessionStorage.getItem("Username");

      if(this.id== null)
      this.router.navigate(['/signIn'])

  }

  logout()
  {
    console.log("logout");
    sessionStorage.clear();
    delete sessionStorage["Userid"];
    this.router.navigate(["/signin"]);
  }

}
