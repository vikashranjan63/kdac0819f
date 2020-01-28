import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
roles;
msg;
  constructor(private service: DataService,public router:Router) { }

  ngOnInit() {
    console.log("in service of role");
    let resultset=this.service.AllRoles();
    resultset.subscribe((data)=>{
      this.roles=data;
      console.log(this.roles);
    });
  }

}
