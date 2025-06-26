import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class AuthService {

  private readonly AUTH_KEY = 'auth-user'; // puedes guardar el correo u otro dato

  login(email:string): void {
    //guarda el correo en localStorage
    localStorage.setItem(this.AUTH_KEY, email);
  }

  logout(): void {
    //elimina el correo de localStorage
    localStorage.removeItem(this.AUTH_KEY);
  }

  isLoggedIn(): boolean {
    //verifica si el correo existe en localStorage

    return !!localStorage.getItem(this.AUTH_KEY);
  }

  getUserEmail(): string | null {
    //obtiene el correo de localStorage
    return localStorage.getItem(this.AUTH_KEY);
  }
}
