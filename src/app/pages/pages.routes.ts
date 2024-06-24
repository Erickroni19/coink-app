import { Routes } from "@angular/router";

import { RegisterLayoutComponent } from "./layouts/register-layout/register-layout.component";
import { HomeAuthPageComponent } from "./home-auth-page/home-auth-page.component";
import { CellPhoneNumberPageComponent } from "./register/cell-phone-number-page/cell-phone-number-page.component";
import { AccountInformationPageComponent } from "./register/account-information-page/account-information-page.component";
import { FinishRegistrationComponent } from "./register/finish-registration/finish-registration.component";

export const PAGE_ROUTES: Routes = [
  {
    path: '',
    component: HomeAuthPageComponent,
  },
  {
    path: 'register',
    component: RegisterLayoutComponent,
    children: [
      { path: 'phone-number', component: CellPhoneNumberPageComponent },
      { path: 'account-information', component: AccountInformationPageComponent },
      { path: 'finish', component: FinishRegistrationComponent },
    ]
  }
]
