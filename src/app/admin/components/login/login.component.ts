import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  password = '';
  error    = '';
  loading  = false;

  constructor(private authService: AuthService, private router: Router) {}

  submit(): void {
    this.error   = '';
    this.loading = true;
    this.authService.login(this.password).subscribe({
      next: () => this.router.navigate(['/admin/dashboard']),
      error: () => {
        this.error   = 'Invalid password. Try again.';
        this.loading = false;
      }
    });
  }
}
