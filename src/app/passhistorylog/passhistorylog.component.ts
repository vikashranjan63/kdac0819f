import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passhistorylog',
  templateUrl: './passhistorylog.component.html',
  styleUrls: ['./passhistorylog.component.css']
})
export class PasshistorylogComponent implements OnInit {
passhist;
  constructor(private service:DataService,public router:Router) { }

  ngOnInit() {
    console.log("in service of role");
    let resultset = this.service.PassChLog();
    resultset.subscribe((data) => {
      this.passhist = data;
      console.log(this.passhist);
    });
  }

}
