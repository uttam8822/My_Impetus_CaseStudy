import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-fetchdatadentalvision',
  templateUrl: './fetchdatadentalvision.component.html',
  styleUrls: ['./fetchdatadentalvision.component.css']
})
export class FetchdatadentalvisionComponent implements OnInit {

  config:any;
  userData:any=[];
  constructor(private userRegistration:RegistrationService){
    this.userRegistration.getDentalVisionData().subscribe(data=>{
      console.log(data);
      this.userData=data;
     
    });

    
    

  }

  ngOnInit(): void {
  }

}
