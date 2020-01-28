import { Component, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { EmtrService } from './emtr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';

  isLogIn:false;

  constructor(private emitterService: EmtrService, private route: Router)
  { }

  ngOnInit()
  {
    console.log("In ngOnInit of app.ts");
    this.emitterService.getEmitterValueForLogInBtnSwitch().subscribe(item =>this.isLogIn = item);
    console.log(this.isLogIn);
  }

  logout()
  {
    this.isLogIn = false;
    delete sessionStorage['Userid'];
    delete sessionStorage['isloggedIn'];
    delete sessionStorage['Username'];
  
    this.route.navigate['/signIn'];
    
  }

}
