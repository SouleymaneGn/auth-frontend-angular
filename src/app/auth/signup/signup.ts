import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../auth-service';
import {Card} from 'primeng/card';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-signup',
  imports: [
    Card,
    InputText,
    ReactiveFormsModule,
    Password,
    Button
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  authService = inject(AuthService)
form= new FormGroup({
  fullName: new FormControl('', {validators: [Validators.required],nonNullable:true}),
  email : new FormControl('', {validators: [Validators.required], nonNullable: true}),
  password: new FormControl('', {validators: [Validators.required], nonNullable: true}),
  passwordConfirmation: new FormControl('', {validators: [Validators.required], nonNullable: true}),
})

  submit(){
  this.form.markAsTouched()
      const user:
        {
          fullName: string,
          email: string,
          password: string,
          passwordConfirmation: string
        }=this.form.getRawValue()

    if (this.form.invalid)  return;
    this.authService.signUp(user).subscribe((data)=>console.log(data))
  }
}


