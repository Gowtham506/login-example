import { Injectable } from '@angular/core';
import { User } from "app/User/user";
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
const POST_LOGIN_URL = '/verifyLogin1';
const POST_REGISTER_URL = 'http://localhost:8080/test/register';
@Injectable()
export class UserService {


  constructor(private http: Http) { }

  verifyLogin(user: User): Observable<boolean> {
    const headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    console.log('logins user details' + JSON.stringify(user));
    return this.http.post(POST_LOGIN_URL, JSON.stringify(user), { headers: headers }).map((res: Response) => res.json());


  }
  registerUser(user: User): Observable<boolean> {
    const headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    console.log('Register user details' + JSON.stringify(user));
    return this.http.post(POST_REGISTER_URL, JSON.stringify(user), { headers: headers }).map((res: Response) => res.json());


  }
}
