import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.css']
})
export class CreateadminComponent implements OnInit {

  constructor(private _service: RegistrationService, private _route: Router) { }
  createAd=new Admin();
  msg1:string='';
  ngOnInit(): void {
  }

  createAdmin() {
    this._service.createAdminFromRemote(this.createAd).subscribe(
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
