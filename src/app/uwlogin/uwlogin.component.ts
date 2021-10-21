import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Uwriter } from '../uwriter';
import { CompileMetadataResolver } from '@angular/compiler';
import {Route} from '@angular/router';
import { RegistrationService } from '../registration.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-uwlogin',
  templateUrl: './uwlogin.component.html',
  styleUrls: ['./uwlogin.component.css']
})
export class UwloginComponent implements OnInit {
  uwriter=new Uwriter();
  msg:string='';

  constructor(private _service: RegistrationService, private _route: Router) { }

  ngOnInit(): void {
  }
  loginUw() {
    this._service.loginUwriter(this.uwriter).subscribe(
    data=>{
      console.log("registered successfully");
      this.msg="Login Successfully";
      this. _route.navigate(["/uwriterhome"]);
    },
    error=>{
      console.error("exception occurred")
      this.msg="Bad Credentials";
    }
    );
  }

}
