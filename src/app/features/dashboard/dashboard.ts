import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="min-h-screen bg-zinc-950 text-white p-8">
      <div class="max-w-4xl mx-auto">
        <header class="flex items-center justify-between border-b border-zinc-800 pb-6 mb-8">
          <div>
            <h1 class="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Dashboard</h1>
            <p class="text-zinc-400 mt-1">Welcome back to your workspace</p>
          </div>
          <button (click)="logout()" class="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-sm transition-colors duration-200">
            Sign Out
          </button>
        </header>
        
        <main class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg hover:border-zinc-700 transition-colors duration-200">
            <h3 class="text-zinc-400 font-medium text-sm mb-2">Total Activity</h3>
            <p class="text-4xl font-semibold">1,248</p>
          </div>
          <div class="p-6 bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg hover:border-zinc-700 transition-colors duration-200">
            <h3 class="text-zinc-400 font-medium text-sm mb-2">Active Users</h3>
            <p class="text-4xl font-semibold">892</p>
          </div>
          <div class="p-6 bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg hover:border-zinc-700 transition-colors duration-200">
            <h3 class="text-zinc-400 font-medium text-sm mb-2">Revenue</h3>
            <p class="text-4xl font-semibold">$14.2k</p>
          </div>
        </main>
      </div>
    </div>
  `
})
export class DashboardComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/unauthorized']);
  }
}
