import {Component, inject, signal} from '@angular/core';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../auth-service';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-form',
  imports: [
    Card,
    Button,
    InputText,
    Password,
    ReactiveFormsModule
  ],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.scss',
})
export class AuthForm {
 authService = inject(AuthService)
  mode  = signal<'login'|'register'>('login');
  router = inject(Router);
  form = new FormGroup({
    email: new FormControl('', {validators: [Validators.required], nonNullable: true}),
    password: new FormControl('', {validators: [Validators.required], nonNullable: true}),
  })

  togglesMode(){
    this.mode.update(value => value==='login' ? 'register' : 'login');
  }
  submit(){
    this.form.markAsTouched();
    const login = this.form.getRawValue()

    if(this.form.invalid)return;
    // if (this.mode() === 'register') {
    //   this.register()
    // }
    // else {
    //   this.login()
    // }
    this.authService.login(login).subscribe((data)=>{
     // void  this.router.navigate(['/']);
     const token = localStorage.getItem("token")
      void this.router.navigate(['/']);
      // console.log(data)
      // console.log(token);
    })

  }

  logout(){
    this.authService.logout().subscribe((data)=>{
      console.log(data)
    })
  }

  private register(){}
  private login(){}



}
