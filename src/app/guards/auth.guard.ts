import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    // Si el usuario está logueado, permitir acceso a la ruta
    if (this.auth.isLoggedIn()) {
      return true;
    }

    // Si NO está logueado, redirigir al login
    return this.router.parseUrl('/login');
  }
}
