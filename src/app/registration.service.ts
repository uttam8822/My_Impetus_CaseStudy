import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Admin } from './admin';
import { Uwriter } from './uwriter';
import {DentalUser} from './dental-user'
import {LifeRegistration} from './life-registration'
import { DVRegistration } from './dv-registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

  //for dental service
  public applyUserForDental(user:DentalUser):Observable<any>{
    return this._http.post<any>("http://localhost:8066/registeruserservice",user);
    }

  //for life service  
  public applyUserForLife(user:LifeRegistration):Observable<any>{
    return this._http.post<any>("http://localhost:8066/registerlifeservice",user);
    }


    //for dental and vision service
    public applyUserForDVService(user:DVRegistration):Observable<any>{
      return this._http.post<any>("http://localhost:8066/registerdentalvisionservice",user);
      }

  //fetch dental data
  getDentalData(){
    let apiurl ="http://localhost:8066/getdentaldata";
    return this._http.get(apiurl);
  }    

  //fetch life data
  getLifeData(){
    let apiurl ="http://localhost:8066/getlifedata";
    return this._http.get(apiurl);
  }  

  //fetch data dental vision
  getDentalVisionData(){
    let apiurl ="http://localhost:8066/getdentalvisiondata";
    return this._http.get(apiurl);
  } 


  public loginUserFromRemote(user:User):Observable<any>{
  return this._http.post<any>("http://localhost:8071/login",user);
  }
  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8071/registeruser",user);
  }
  public loginAdminFromRemote(admin:Admin):Observable<any>{
    return this._http.post<any>("http://localhost:8091/adlogin",admin);
    }
  public registerUwriter(uwriter:Uwriter):Observable<any>{
    return this. _http.post<any>("http://localhost:8091/cruwriter",uwriter);
  }
  public loginUwriter(uwriter:Uwriter):Observable<any>{
    return this. _http.post<any>("http://localhost:8091/uwlogin",uwriter);
  }
}
