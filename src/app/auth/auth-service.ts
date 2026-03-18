import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, of, tap} from 'rxjs';
import {SignIn} from './models/SignIn.Model';
import {UserModel} from './models/user.model';
import {Signup} from './signup/signup';
import {SignupModel} from './models/signup.model';
interface CurrentUser{
  id:number
  email:string
  role?:string
}
interface AccessToken {
  access_token: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = signal<boolean>(false)

  httpClient = inject(HttpClient);
  baseUrl= "http://localhost:3000/auth";
  currentUser = signal<CurrentUser | undefined>(undefined)

  login(login:SignIn) {
    return this.httpClient.post<AccessToken>(`${this.baseUrl}/login`,login).pipe(
      tap((data)=>{
        localStorage.setItem('token', data.access_token);
        this.isAuthenticated.set(true);

      })
    )
  }

  signUp(signup:SignupModel) {
    return this.httpClient.post<UserModel>(`${this.baseUrl}/signup`,signup)
  }
  profile() {
    return this.httpClient
      .get<CurrentUser>(`http://localhost:3000/users/me`)
  }

  logout(){
    return this.httpClient.post<string>('http://localhost:3333/api/v1/auth/logout',"")
  }

   checkAuthStatus() {
    this.isAuthenticated.set(this.isTokenValid());
  }

  private isTokenValid(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const now = Math.floor(Date.now() / 1000);
      return payload.exp > now;
    } catch {
      return false;
    }
  }}
