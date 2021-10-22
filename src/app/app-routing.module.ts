import { CreatuwComponent } from './creatuw/creatuw.component';
import { ServiceComponent } from './service/service.component';
import { DentalVisionComponent } from './dental-vision/dental-vision.component';
import { DentalComponent } from './dental/dental.component';
import { LifeComponent } from './life/life.component';
import { UhomeComponent } from './uhome/uhome.component';
import { UwloginComponent } from './uwlogin/uwlogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { UwhomeComponent } from './uwhome/uwhome.component';
import { AdhomeComponent } from './adhome/adhome.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FetchdatadentalComponent } from './fetchdatadental/fetchdatadental.component';
import { FetchdatalifeComponent } from './fetchdatalife/fetchdatalife.component';
import { FetchdatadentalvisionComponent } from './fetchdatadentalvision/fetchdatadentalvision.component';
import { CreateadminComponent } from './createadmin/createadmin.component';
import { SuccessfullcomponentComponent } from './successfullcomponent/successfullcomponent.component';
import { LifeServiceUserDetailsComponent } from './life-service-user-details/life-service-user-details.component';

const routes: Routes = [
  {path:'',pathMatch:"full", redirectTo:"home"},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'adhome',component:AdhomeComponent},
  {path:'uwriterhome',component:UwhomeComponent},
  {path:'uwlogin',component:UwloginComponent},
  {path:'adlogin',component:AdloginComponent},
  {path:'uhome',component:UhomeComponent},
  {path:'life',component:LifeComponent},
  {path:'service',component:ServiceComponent},
  {path:'cretuw',component:CreatuwComponent},
  {path:'dental',component:DentalComponent},
  {path:'denvi',component:DentalVisionComponent},
  {path:'signup',component:SignupComponent},
  {path:"detaldata",component:FetchdatadentalComponent},
  {path:"lifedata",component:FetchdatalifeComponent},
  {path:"DVdata",component:FetchdatadentalvisionComponent},
  {path:"createAdmin",component:CreateadminComponent},
  {path:"success",component:SuccessfullcomponentComponent},
  {path:"lifeServiceDetails",component:LifeServiceUserDetailsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
