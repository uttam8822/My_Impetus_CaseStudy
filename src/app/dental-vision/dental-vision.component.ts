import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { DVRegistration } from '../dv-registration';
@Component({
  selector: 'app-dental-vision',
  templateUrl: './dental-vision.component.html',
  styleUrls: ['./dental-vision.component.css']
})
export class DentalVisionComponent implements OnInit {

 DentalVisionForm:any;
 emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  constructor(private _service:RegistrationService) { }

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
      "address" : new FormControl(null,[Validators.required]),
      "state": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "gender": new FormControl(null,[Validators.required,Validators.pattern('[?:Male\b|Female\b]*')]),
      "selectPlane": new FormControl(null,[Validators.required,Validators.pattern('[1-5]')]),
      "Tobacco": new FormControl(null,[Validators.required,Validators.pattern('[?:Yes\b|No\b]*')]),
      "anyCavity": new FormControl(null,[Validators.required,Validators.pattern('[?:Yes\b|No\b]*')]),
      "anyEyeDisease": new FormControl(null,[Validators.required,Validators.pattern('[?:Yes\b|No\b]*')]),
      "wearGlasses": new FormControl(null,[Validators.required,Validators.pattern('[?:Yes\b|No\b]*')]),
      "groupInsurance": new FormControl(null,[Validators.required,Validators.pattern('[?:Yes\b|No\b]*')]),
      "anyEyeOperation": new FormControl(null,[Validators.required,Validators.pattern('[?:Yes\b|No\b]*')]),
      "oralOperation": new FormControl(null,[Validators.required,Validators.pattern('[?:Yes\b|No\b]*')]),
      "lastDentalCkeck": new FormControl(null,[Validators.required,Validators.pattern('[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}')]),
      "cancellingInsurance": new FormControl(null,[Validators.required,Validators.pattern('[?:Yes\b|No\b]*')]),
      "healthIssue"   : new FormControl(null,[Validators.required,Validators.maxLength(50),Validators.pattern('[A-Za-z0-9]*')]),
      "dateOfBirth": new FormControl(null,[Validators.required,Validators.pattern('[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}')]),
      "occupation" : new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "additionalComments"   : new FormControl(null,[Validators.required,Validators.maxLength(50),Validators.pattern('[A-Za-z0-9]*')]),
     
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
  get occupation() {return this.DentalVisionForm.get('occupation');}
  get state() {return this.DentalVisionForm.get('state');}
  get dateOfBirth() {return this.DentalVisionForm.get('dateOfBirth');}
  get selectPlane() {return this.DentalVisionForm.get('selectPlane');}
  get gender() {return this.DentalVisionForm.get('gender');}
  get healthIssue() {return this.DentalVisionForm.get('healthIssue');}
  get Tobacco() {return this.DentalVisionForm.get('Tobacco');}
  get groupInsurance() {return this.DentalVisionForm.get('groupInsurance');}
  get cancellingInsurance() {return this.DentalVisionForm.get('cancellingInsurance');}
  get oralOperation() {return this.DentalVisionForm.get('oralOperation');}
  get lastDentalCkeck() {return this.DentalVisionForm.get('lastDentalCkeck');}
  get anyCavity() {return this.DentalVisionForm.get('anyCavity');}
  get wearGlasses() {return this.DentalVisionForm.get('wearGlasses');}
  get anyEyeDisease() {return this.DentalVisionForm.get('anyEyeDisease');}
  get anyEyeOperation() {return this.DentalVisionForm.get('anyEyeOperation');}
  get additionalComments() {return this.DentalVisionForm.get('additionalComments');}
  user = new DVRegistration();
  applyDVService(){

    this._service.applyUserForDVService(this.user).subscribe(
      data=>console.log("response received"),
      error => console.log("exception occred")
      
    );
  }
}


