import { Routes, UrlSegment } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { TokenHandlerComponent } from './features/token-handler/token-handler';
import { DashboardComponent } from './features/dashboard/dashboard';
import { UnauthorizedComponent } from './features/unauthorized/unauthorized';
import { NotFoundComponent } from './features/not-found/not-found';

export const routes: Routes = [
  { 
    matcher: (url) => {
      if (url.length === 1 && url[0].path.startsWith('token=')) {
        return {
          consumed: url,
          posParams: {
            token: new UrlSegment(url[0].path.substring(6), {})
          }
        };
      }
      return null;
    }, 
    component: TokenHandlerComponent 
  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
