import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-fetchdatalife',
  templateUrl: './fetchdatalife.component.html',
  styleUrls: ['./fetchdatalife.component.css']
})
export class FetchdatalifeComponent implements OnInit {

  config:any;
  userData:any=[];
  constructor(private userRegistration:RegistrationService){
    this.userRegistration.getLifeData().subscribe(data=>{
      console.log(data);
      this.userData=data;
     
    });

    
    

  }

  ngOnInit(): void {
  }

}
