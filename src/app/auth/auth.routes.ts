import { Routes } from '@angular/router';
import {AuthForm} from './auth-form/auth-form';
import {Signup} from './signup/signup';

export const authRoutes: Routes = [
  {
    path: '',component:AuthForm
  },
  {
    path: 'register',component:Signup
  },
];

