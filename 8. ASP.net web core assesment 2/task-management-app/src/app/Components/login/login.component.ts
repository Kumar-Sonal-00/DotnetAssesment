import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    // Authentication logic (for simplicity, no real login)
    if (this.username === 'admin' && this.password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/tasks']);
    } else {
      alert('Invalid login credentials');
    }
  }
  onLogout(): void {
    // Remove login status from localStorage
    localStorage.removeItem('isLoggedIn');

    // Navigate back to login page
    this.router.navigate(['/login']);
  }

}
