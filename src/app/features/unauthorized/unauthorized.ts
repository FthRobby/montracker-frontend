import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  imports: [RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <div class="flex flex-col items-center justify-center p-8 text-center">
        <div class="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
          <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
        <h1 class="text-4xl font-bold tracking-tight mb-2">Access Denied</h1>
        <p class="text-zinc-400 mb-8 max-w-sm">You don't have permission to access this page or your session has expired.</p>
        <!-- <a routerLink="/" class="px-6 py-2.5 bg-white text-zinc-950 font-medium rounded-lg hover:bg-zinc-200 transition-colors duration-200">
          Return Home
        </a> -->
      </div>
    </div>
  `
})
export class UnauthorizedComponent { }
