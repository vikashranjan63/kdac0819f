import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-user',
  templateUrl: './online-user.component.html',
  styleUrls: ['./online-user.component.css']
})
export class OnlineUserComponent implements OnInit {

  users;
  msg;
  constructor(private service: DataService, public router: Router) { }

  ngOnInit() {
    console.log("in service of role");
    let resultset = this.service.UsersData();
    resultset.subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }

}
