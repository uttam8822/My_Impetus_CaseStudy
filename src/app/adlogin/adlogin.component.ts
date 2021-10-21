import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Route } from '@angular/compiler/src/core';
import { NgForm } from '@angular/forms';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { CompileMetadataResolver } from '@angular/compiler';
@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css']
})
export class AdloginComponent implements OnInit {
  alert: boolean = false;
  msg: String = '';
  admin = new Admin();
  constructor(private _service: RegistrationService, private _route: Router) { }

  ngOnInit(): void {
  }

  loginAdmin() {
    this._service.loginAdminFromRemote(this.admin).subscribe(
      data => {
        console.log("response received");
        this.msg = "login success"
        this._route.navigate(["/adhome"])
      },
      error => {
        console.error("exception occour");
        this.msg = "Bad credentials, Please enter valid email and password";
        this.alert = false;
        this._route.navigate(["/adlogin"])
      }

    );
  }
 

}
