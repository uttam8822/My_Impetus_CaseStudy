import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user=new User();
  msg='';

  alert:boolean=false;
  alert1:boolean=false;
  constructor(private _service : RegistrationService,private _router :Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {console.log("response received");
      this.msg="Registration successfull";
      this.alert=true;
      this.alert1=false;
    },
      error => {
        console.error("exception occour");
       this.msg="user already exist go to login";
      this.alert=false;
      this.alert1=true;

    }
      
    ); 
  }

}
