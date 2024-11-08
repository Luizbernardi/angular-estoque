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

  constructor(private router: Router) { }

  onSubmit(): void {
    // Simulação de autenticação
    if (this.username === 'admin' && this.password === 'admin') {
      // Armazene o estado de login (simulação)
      localStorage.setItem('isLoggedIn', 'true');
      // Redirecione para a página de cadastro de produto
      this.router.navigate(['/cadastro-produto']);
    } else {
      alert('Login inválido');
    }
  }
}
