import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./pages/pages.routes').then( c => c.PAGE_ROUTES)},
  {path:'', redirectTo:'auth', pathMatch:'full'}
];
