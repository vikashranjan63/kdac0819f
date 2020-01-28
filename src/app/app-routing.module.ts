import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationSystemComponent } from './reservation-system/reservation-system.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'about', component:AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signin', component:SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'payment', component:PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
