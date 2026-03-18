import {Component, inject} from '@angular/core';
import {Button} from 'primeng/button';
import {AuthService} from '../auth/auth-service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  imports: [
    Button
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

 auth = inject(AuthService);
 constructor(private authService: AuthService) {
this.profile()
 }
 profile(){
   this.auth.profile().subscribe((user) => {
     console.log("profile",user);
   })
 }

}
