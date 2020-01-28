import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {
passlog;
msg;
  constructor(private service:DataService, public router:Router) { }

  ngOnInit()
  {
    console.log("In Pass History log");
    let rset =this.service.passhis();
    rset.subscribe((data)=>{
      this.passlog =data;
      console.log(this.passlog);
    });
  }

}
