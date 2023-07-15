import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { userAuth } from './userAuth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user:User){
    return this.http.post<User>("http://localhost:8000/user/",user);
  }

  loginUser(userAuth:userAuth)
{
 return  this.http.post<User>('http://127.0.0.1:8000/user/login/',userAuth);
}

}
