import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.url}/users?email=${email}`);
  }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/users`, user);
  }
}
