import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {AuthService} from './auth/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  authService.checkAuthStatus(); // vérifie token à chaque activation

  if (authService.isAuthenticated()) {
    return true; // autorisé
  } else {
  void  router.navigate(['/auth/login']); // redirection login
    return false;
  }
};
