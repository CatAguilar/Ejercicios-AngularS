import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    // Si el usuario YA está logueado:
    if (this.auth.isLoggedIn()) {
      const email = this.auth.getUserEmail();

      // Redirige al dashboard correspondiente según el usuario
      if (email === 'profe@correo.com') {
        return this.router.parseUrl('/dashboard/profesor');
      } else {
        return this.router.parseUrl('/dashboard/students');
      }
    }

    // Si NO está logueado, permitir acceso al login
    return true;
  }
}
