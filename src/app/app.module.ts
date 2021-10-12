import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdhomeComponent } from './adhome/adhome.component';
import { UwhomeComponent } from './uwhome/uwhome.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { UwloginComponent } from './uwlogin/uwlogin.component';
import { UhomeComponent } from './uhome/uhome.component';
import { LifeComponent } from './life/life.component';
import { DentalComponent } from './dental/dental.component';
import { DentalVisionComponent } from './dental-vision/dental-vision.component';
import { ServiceComponent } from './service/service.component';
import { CreatuwComponent } from './creatuw/creatuw.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    AdhomeComponent,
    UwhomeComponent,
    AdloginComponent,
    UwloginComponent,
    UhomeComponent,
    LifeComponent,
    DentalComponent,
    DentalVisionComponent,
    ServiceComponent,
    CreatuwComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
