import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { OnlineUserComponent } from './online-user/online-user.component';
import { RoleComponent } from './role/role.component';
import { FormsModule } from '@angular/forms';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { PasshistorylogComponent } from './passhistorylog/passhistorylog.component';
import { CarsComponent } from './cars/cars.component';
import { CarListComponent } from './car-list/car-list.component';
import { RentlistComponent } from './rentlist/rentlist.component';
import { ReservationSystemComponent } from './reservation-system/reservation-system.component';
import { CarlistupdateComponent } from './carlistupdate/carlistupdate.component';
import { CaraddlistComponent } from './caraddlist/caraddlist.component';
import { SignoutComponent } from './signout/signout.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { ProceedComponent } from './proceed/proceed.component';
import { BookcarComponent } from './bookcar/bookcar.component';
import { PaydetComponent } from './paydet/paydet.component';
export function translateHttpLoaderFactory(http: HttpClient) {
return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    PasswordChangeComponent,
    OnlineUserComponent,
    RoleComponent,
    ForgetPassComponent,
    PasshistorylogComponent,
    CarsComponent,
    CarListComponent,
    RentlistComponent,
    ReservationSystemComponent,
    CarlistupdateComponent,
    CaraddlistComponent,
    SignoutComponent,
    BookingComponent,
    PaymentComponent,
    ProceedComponent,
    BookcarComponent,
    PaydetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    RouterModule.forRoot([
      { path: 'signIn', component: SignInComponent },
      { path: 'signUp', component: SignUpComponent },
      { path:'forgetpass',component: ForgetPassComponent },
      { path: 'role', component: RoleComponent },
      { path: 'contact', component:ContactComponent},
      { path: 'cars', component: CarsComponent },
      { path: 'bookcar', component: BookcarComponent },
      { path: 'carlistadd', component:CaraddlistComponent},
      { path: 'proceed', component: ProceedComponent },
      { path: 'paydet', component: PaydetComponent },
      

      { path: 'editcar', component: CarlistupdateComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'dashboard', component: DashboardComponent,children:[
                        { path: 'onlineusers', component: OnlineUserComponent },
                        { path: 'passhistorylog', component: PasshistorylogComponent },
                        { path: 'passchange', component: PasswordChangeComponent },
                        { path: 'rentlist', component: RentlistComponent },
                        { path: 'carlist', component: CarListComponent },
                        { path: 'reslist', component: ReservationSystemComponent }  
      ] },
     

   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
