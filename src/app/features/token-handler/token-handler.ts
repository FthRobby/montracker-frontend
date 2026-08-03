import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-token-handler',
  template: `
    <div class="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <div class="flex flex-col items-center justify-center p-8 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl">
        <svg class="animate-spin -ml-1 mr-3 h-8 w-8 text-blue-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <h2 class="text-xl font-medium tracking-tight">Verifying Authentication...</h2>
        <p class="text-zinc-400 mt-2 text-sm">Please wait while we validate your token.</p>
      </div>
    </div>
  `
})
export class TokenHandlerComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private authService = inject(AuthService);

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard'])
      return
    }

    // Read the token from the query param ?token=xxx
    this.route.queryParamMap.subscribe(params => {
      const token = params.get('token');
      if (token) {
        this.verifyToken(token);
      } else {
        this.router.navigate(['/unauthorized']);
      }
    });
  }

  private verifyToken(token: string): void {
    this.authService.verifyToken(token).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Token verification failed', err);
        this.router.navigate(['/unauthorized']);
      }
    });
  }
}