import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, tap, catchError } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  userChatId: string;
  exp: number;
  iat: number;
}

interface VerifyTokenResponse {
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  // Signal to hold the current auth status
  isAuthenticated = signal<boolean>(this.hasToken());

  private hasToken(): boolean {
    const token = localStorage.getItem('auth_token');
    if (!token) return false;

    try {
      const { exp } = jwtDecode<JwtPayload>(token);
      return exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  verifyToken(token: string): Observable<VerifyTokenResponse> {
    return this.http.post<VerifyTokenResponse>(`${environment.apiUrl}/auth/verify`, { token }).pipe(
      tap((response) => {
        localStorage.setItem('auth_token', response.accessToken);
        this.isAuthenticated.set(true);
      }),
      catchError((error) => {
        this.logout();
        throw error;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.isAuthenticated.set(false);
  }
}