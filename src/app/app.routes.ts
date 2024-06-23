import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/pages.routes').then( c => c.PAGE_ROUTES) },
  { path:'', redirectTo:'', pathMatch:'full'},
  { path: '**', redirectTo: '' }
];
