import { Routes } from '@angular/router';
import {Main} from './main/main';
import {authGuard} from './auth-guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: '',component:Main, canActivate:[authGuard], children:[]
  }
];
