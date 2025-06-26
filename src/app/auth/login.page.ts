import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  templateUrl: './login.page.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],

})


export class loginPage{

  loginForm: FormGroup;

  errorMessage = '';

  constructor(private fb: FormBuilder, private router: Router){

    //formulario con validacion y campos
    this.loginForm = this.fb.group({
      //cada campo tiene 'valorInicial', [array de validaciones]
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

    onLogin() {
    this.errorMessage = ''; // Limpiar mensaje anterior

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;

    const validEmails = ['profe@correo.com', 'alumno@correo.com'];

    if (!validEmails.includes(email)) {
      this.errorMessage = 'Correo no reconocido o no permitido.';
      return;
    }

    if (email === 'profe@correo.com' && password === '123456') {
      this.router.navigate(['/dashboard/profesor']);
    } else if (email === 'alumno@correo.com' && password === '123456') {
      this.router.navigate(['/dashboard/students']);
    } else {
      this.errorMessage = 'Contraseña incorrecta.';
    }
  }
}
