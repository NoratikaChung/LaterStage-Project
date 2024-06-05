import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecoverMatQtyComponent } from './recover-mat-qty/recover-mat-qty.component';
import { ChangeKitStatusComponent } from './change-kit-status/change-kit-status.component';
import { AppComponent } from './app.component';

import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: LandingPageComponent },
  { path: 'recover-mat-qty', component: RecoverMatQtyComponent },
  { path: 'change-kit-status', component: ChangeKitStatusComponent },
  { path: 'main-dashboard', component: MainDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
