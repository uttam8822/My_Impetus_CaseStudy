import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dental-vision',
  templateUrl: './dental-vision.component.html',
  styleUrls: ['./dental-vision.component.css']
})
export class DentalVisionComponent implements OnInit {

 DentalVisionForm:any;
 emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  constructor() { }

  ngOnInit(): void {
    
    this.DentalVisionForm = new FormGroup({
      "firstname" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastname" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "middlename" : new FormControl(null,[Validators.pattern('[a-zA-Z]*')]),
      "pannumber" : new FormControl(null,[Validators.required,Validators.pattern('[[A-Z]{5}[0-9]{4}[A-Z]{1}]*')]),
      "aadhar"    : new FormControl(null, [Validators.required,Validators.minLength(12),Validators.maxLength(12),Validators.pattern('[0-9]*')]),
      "email"     : new FormControl(null,[Validators.required,Validators.pattern(this.emailPattern)]),
      "zipcode"   : new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('[0-9]*')]),
      "city": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "contact": new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]*')]),
      "income" : new FormControl(null, [Validators.required,Validators.maxLength(2),Validators.pattern('[0-9]*')]),
      "address" : new FormControl(null,[Validators.required])
    });
  }

  get firstname() {return this.DentalVisionForm.get('firstname');}
  get lastname() {return this.DentalVisionForm.get('lastname');}
  get middlename() {return this.DentalVisionForm.get('middlename');}
  get pannumber() {return this.DentalVisionForm.get('pannumber');}
  get aadhar() {return this.DentalVisionForm.get('aadhar');}
  get email() {return this.DentalVisionForm.get('email');}
  get zipcode() {return this.DentalVisionForm.get('zipcode');}
  get city() {return this.DentalVisionForm.get('city');}
  get contact() {return this.DentalVisionForm.get('contact');}
  get income() {return this.DentalVisionForm.get('income');}
  get address() {return this.DentalVisionForm.get('address');}
  }


