import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  termo: string = '';

  constructor(private router: Router) { }

  onSearch(): void {
    if (this.termo.trim()) {
      this.router.navigate(['/search-produtos'], { queryParams: { termo: this.termo } });
    }
  }
}
