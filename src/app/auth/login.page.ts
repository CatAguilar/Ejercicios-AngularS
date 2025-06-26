import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../core/services/auth.service";

@Component({
  templateUrl: './login.page.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],

})


export class loginPage{

  loginForm: FormGroup;

  errorMessage = '';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService){


    //formulario con validacion y campos
    this.loginForm = this.fb.group({
      //cada campo tiene 'valorInicial', [array de validaciones]
      //validators de angular toma correos incompletos como válidos
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    if (this.authService.isLoggedIn()) {
      const email = this.authService.getUserEmail();
      if (email === 'profe@correo.com') {
        this.router.navigate(['/dashboard/profesor']);
      } else if (email === 'alumno@correo.com') {
        this.router.navigate(['/dashboard/students']);
      }
    }

  }//llave de cierre del constructor

  onLogin() {

    //limpiar mensaje anterior
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;

    //arreglo de correos válidos
    const validEmails = ['profe@correo.com', 'alumno@correo.com'];

    //si el correo no esta en el arreglo
    if (!validEmails.includes(email)) {
      this.errorMessage = 'Correo no reconocido o no permitido.';
      return;
    }

    //si la contraseña no es correcta
    if (password !== '123456') {
      this.errorMessage = 'Contraseña incorrecta.';
      return;
    }

    // guardar sesión
    this.authService.login(email);

    // redirigir
    if (email === 'profe@correo.com') {
      this.router.navigate(['/dashboard/profesor']);
    } else {
      this.router.navigate(['/dashboard/students']);
    }
  }
}
