// // import { NgModule } from '@angular/core';
// // import { BrowserModule } from '@angular/platform-browser';

// // import { AppRoutingModule } from './app-routing.module';
// // import { AppComponent } from './app.component';
// // import { ProjectsComponent} from './components/projects/projects.component';
// // import { FeedbackComponent } from './feedback/feedback.component';
// // import { FormsModule } from '@angular/forms';

// // @NgModule({
// //   declarations: [
// //     AppComponent,
// //     ProjectsComponent,
// //     FeedbackComponent
// //   ],
// //   imports: [
// //     BrowserModule,
// //     AppRoutingModule,
// //     FormsModule
// //   ],
// //   providers: [],
// //   bootstrap: [AppComponent]
// // })
// // export class AppModule { }

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component';
// import { SiteDataService } from './site-data.service';
// import { SideNavComponent } from './side-nav/side-nav.component';
// import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { RecoverMatQtyComponent } from './recover-mat-qty/recover-mat-qty.component';
// import { ChangeKitStatusComponent } from './change-kit-status/change-kit-status.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     SideNavComponent,
//     MainDashboardComponent,
//     LandingPageComponent,
//     RecoverMatQtyComponent,
//     ChangeKitStatusComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule
//   ],
//   providers: [SiteDataService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecoverMatQtyComponent } from './recover-mat-qty/recover-mat-qty.component';
import { ChangeKitStatusComponent } from './change-kit-status/change-kit-status.component';
import { SitesComponent } from './sites/sites.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainDashboardComponent,
    LandingPageComponent,
    RecoverMatQtyComponent,
    ChangeKitStatusComponent,
    SitesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
