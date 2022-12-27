import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { UserForm } from '../interface/user-form';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiURL = 'https://localhost:7105/GetUsersCQRS';
private PostapiURL = 'https://localhost:7105/CreateUser';
  constructor(private http: HttpClient) { }

  //Will return all the users in list
  getUsers(){
    return this.http.get<User[]>(this.apiURL);
  }

  createtUsers(user: User): Observable<number> {
    console.log('test'+ user);
     return this.http.post<number>(this.PostapiURL, user);
  }
}
