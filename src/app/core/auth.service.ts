import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, tap, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  // Signal to hold the current auth status
  isAuthenticated = signal<boolean>(this.hasToken());

  private hasToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  verifyToken(token: string): Observable<any> {
    // We assume backend expects a GET request, but it could be POST.
    // Let's use GET and pass the token as a query param or header.
    // If backend uses /auth/verify, we might need a POST. Let's do POST just in case.
    return this.http.post(`${environment.apiUrl}/auth/verify`, { token }).pipe(
      tap((response: any) => {
        // If successful, save token
        localStorage.setItem('auth_token', token);
        this.isAuthenticated.set(true);
      }),
      catchError(error => {
        this.logout();
        throw error;
      })
    );
    // TEMPORARY MOCK FOR TESTING
    // return of({ success: true }).pipe(
    //   tap(() => {
    //     localStorage.setItem('auth_token', token);
    //     this.isAuthenticated.set(true);
    //   })
    // );

  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.isAuthenticated.set(false);
  }
}
