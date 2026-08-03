import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  // template: `
  //   <div class="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
  //     <div class="flex flex-col items-center justify-center p-8 text-center">
  //       <h1 class="text-9xl font-bold tracking-tighter text-zinc-800 mb-4">404</h1>
  //       <h2 class="text-3xl font-bold tracking-tight mb-2">Page Not Found</h2>
  //       <p class="text-zinc-400 mb-8 max-w-md">The page you are looking for doesn't exist or has been moved.</p>
  //       <a  class="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg shadow-blue-500/25">
  //         Take Me Home
  //       </a>
  //     </div>
  //   </div>
  // `
  templateUrl: './not-found.html'
})
export class NotFoundComponent { }
