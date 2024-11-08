import { AuthService } from './../auth-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      const redirectUrl = this.authService.getRedirectUrl();
      this.router.navigate([redirectUrl]);
    } else {
      alert('Login inválido');
    }
  }
}
