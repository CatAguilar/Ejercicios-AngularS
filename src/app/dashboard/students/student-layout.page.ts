import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { AuthService } from "../../core/services/auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: './student-layout.html',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})


export class StudentLayoutPage {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
