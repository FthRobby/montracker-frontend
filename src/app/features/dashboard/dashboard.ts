import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html'
})
export class DashboardComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/unauthorized']);
  }
}
