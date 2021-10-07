import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Admin } from './admin';
import { Uwriter } from './uwriter';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }
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
