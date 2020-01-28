import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { from } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  constructor(public service: DataService, public router: Router) {}

  ngOnInit() {}
  Add(myForm: any) {
    console.log(myForm);
    // let data=myForm.form.value;
    let result = this.service.AddUser(myForm);
    result.subscribe((data: any) => {
      if (data.Status == "Success") {
        alert("Inserted");
        this.router.navigate["/signIn"];
      } else {
        alert("Failed");
      }
    });
  }
}
