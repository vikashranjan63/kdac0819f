import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { EmtrService } from '../emtr.service';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  constructor(
    public service: DataService,
    public router: Router,
    private emitterService: EmtrService,
    private translateService: TranslateService
  ) {
    translateService.addLangs(["en", "ge", "hi"]);
    translateService.setDefaultLang("en");
  }

  ngOnInit() {}

  switchLanguage(language: string) {
    this.translateService.use(language);
  }
  Login(credentials) {
    this.emitterService.logInBtnSwitch(true);
    console.log(credentials);
    let resultstate = this.service.Login(credentials);
    resultstate.subscribe((data: any) => {
      console.log(data);
      if (data.Status == "success") {
        alert("Login Success");
        console.log(data.Data.UserId_);
        console.log("user role id" + data.Data.RoleId);
        sessionStorage.setItem("isloggedIn", "1");
        sessionStorage.setItem("UserDetails", data.Data);
        sessionStorage.setItem("Userid", data.Data.UserId_);
        sessionStorage.setItem("Username", data.Data.Name);

        if (data.Data.RoleId == 1) {
          console.log("admin panel");
          this.router.navigate(["/dashboard"]);
        } else {
          console.log("user panel");
          this.router.navigate(["/proceed"]);
        }
      } else {
        console.log(data);
        alert("Incorrect EmailId or Password");
        this.router.navigate(["/signIn"]);
      }
    });
  }
}