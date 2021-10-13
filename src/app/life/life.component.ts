import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {
  
  LifeForm : any;
  emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  constructor() { }

  ngOnInit(): void {
    this.LifeForm = new FormGroup({
      "firstname" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastname" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "middlename" : new FormControl(null,[Validators.pattern('[a-zA-Z]')]),
      "pannumber" : new FormControl(null,[Validators.required,Validators.pattern('[[A-Z]{5}[0-9]{4}[A-Z]{1}]*')]),
      "aadhar"    : new FormControl(null, [Validators.required,Validators.minLength(12),Validators.maxLength(12),Validators.pattern('[0-9]*')]),
      "email"     : new FormControl(null,[Validators.required,Validators.pattern(this.emailPattern)]),
      "zipcode"   : new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('[0-9]*')]),
      "city": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "contact": new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]*')]),
      "income" : new FormControl(null, [Validators.required,Validators.maxLength(2),Validators.pattern('[0-9]*')]),
      "address" : new FormControl(null,[Validators.required]),
      "occupation" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]')])
    });
  }

  get firstname() {return this.LifeForm.get('firstname');}
  get lastname() {return this.LifeForm.get('lastname');}
  get middlename() {return this.LifeForm.get('middlename');}
  get pannumber() {return this.LifeForm.get('pannumber');}
  get aadhar() {return this.LifeForm.get('aadhar');}
  get email() {return this.LifeForm.get('email');}
  get zipcode() {return this.LifeForm.get('zipcode');}
  get city() {return this.LifeForm.get('city');}
  get contact() {return this.LifeForm.get('contact');}
  get income() {return this.LifeForm.get('income');}
  get address() {return this.LifeForm.get('address');}
  get occupation() {return this.LifeForm.get('occupation');}
}
