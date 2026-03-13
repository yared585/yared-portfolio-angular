import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  login(password: string) {
    return this.http.post<{ token: string }>(`${this.api}/auth/login`, { password }).pipe(
      tap(res => localStorage.setItem('admin_token', res.token))
    );
  }

  logout(): void {
    localStorage.removeItem('admin_token');
    this.router.navigate(['/admin/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('admin_token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
