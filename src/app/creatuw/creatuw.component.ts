import { Uwriter } from './../uwriter';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Route} from '@angular/router';
import { Router } from '@angular/router';
import {CompileMetadataResolver} from '@angular/compiler';
@Component({
  selector: 'app-creatuw',
  templateUrl: './creatuw.component.html',
  styleUrls: ['./creatuw.component.css']
})
export class CreatuwComponent implements OnInit {
  uwriter=new Uwriter();
  msg1:String='';

  constructor(private _service: RegistrationService, private _route: Router) { }

  ngOnInit(): void {
  }
  
  createUw() {
    this._service.registerUwriter(this.uwriter).subscribe(
    data=>{
      console.log("registered successfully");
      this.msg1="Registered Successfully";
    },
    error=>{
      console.error("exception occurred")
      this.msg1="Already Exist"
    }
    );
  }

}
