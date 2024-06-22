import { Routes } from "@angular/router";

import { RegisterLayoutComponent } from "./layouts/register-layout/register-layout.component";
import { HomeAuthPageComponent } from "./home-auth-page/home-auth-page.component";

export const PAGE_ROUTES: Routes = [
  {
    path: '',
    component: HomeAuthPageComponent,
  },
  {
    path: 'register',
    component: RegisterLayoutComponent,
    children: []
  }
]
