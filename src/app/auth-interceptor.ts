import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  // Si pas de token → on laisse passer la requête normale
  if (!token) {
    return next(req);
  }

  // Cloner la requête et ajouter le header Authorization
  const clonedReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  });

  return next(clonedReq);
};
