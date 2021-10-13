import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dental',
  templateUrl: './dental.component.html',
  styleUrls: ['./dental.component.css']
})
export class DentalComponent implements OnInit {

  Dental:any;
  emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  constructor() { }

  ngOnInit(): void {

     
    this.Dental = new FormGroup({
      "firstname" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastname" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "middlename" : new FormControl(null,[Validators.pattern('[a-zA-Z]*')]),
      "pannumber" : new FormControl(null,[Validators.required,Validators.pattern(this.emailPattern)]),
      "aadhar"    : new FormControl(null, [Validators.required,Validators.minLength(12),Validators.maxLength(12),Validators.pattern('[0-9]*')]),
      "email"     : new FormControl(null,[Validators.required,Validators.pattern('[[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$]*')]),
      "zipcode"   : new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('[0-9]*')]),
      "city": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "contact": new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]*')]),
      "income" : new FormControl(null, [Validators.required,Validators.maxLength(2),Validators.pattern('[0-9]*')]),
      "address" : new FormControl(null,[Validators.required])
    });
  }

  get firstname() {return this.Dental.get('firstname');}
  get lastname() {return this.Dental.get('lastname');}
  get middlename() {return this.Dental.get('middlename');}
  get pannumber() {return this.Dental.get('pannumber');}
  get aadhar() {return this.Dental.get('aadhar');}
  get email() {return this.Dental.get('email');}
  get zipcode() {return this.Dental.get('zipcode');}
  get city() {return this.Dental.get('city');}
  get contact() {return this.Dental.get('contact');}
  get income() {return this.Dental.get('income');}
  get address() {return this.Dental.get('address');}
  }


