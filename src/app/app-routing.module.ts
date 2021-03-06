import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InfoComponent} from "./components/info/info.component";
import {ROUTES_ENUM} from "./constants/routing.constants";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminComponent} from "./components/admin/admin.component";
import {DonateComponent} from "./components/donate/donate.component";
import {ApplicationOverviewComponent} from "./components/application-overview/application-overview.component";
import {ApplicationDisplayComponent} from "./components/application-display/application-display.component";
import {ApplicationFormComponent} from "./components/application-form/application-form.component";
import {TwitterFeedComponent} from "./components/twitter-feed/twitter-feed.component";

const routes: Routes = [
  // main
  {path: ROUTES_ENUM.Dashboard, component: DashboardComponent},
  {path: ROUTES_ENUM.TwitterFeed, component: TwitterFeedComponent},
  {path: ROUTES_ENUM.Info, component: InfoComponent},
  {path: ROUTES_ENUM.Donate, component: DonateComponent},
  {path: ROUTES_ENUM.Login, component: LoginComponent},
  {path: ROUTES_ENUM.Profile, component: ProfileComponent},
  {path: ROUTES_ENUM.Admin, component: AdminComponent},
  // application
  {path: ROUTES_ENUM.ApplicationOverview, component: ApplicationOverviewComponent},
  {path: ROUTES_ENUM.ApplicationDetails + "/:id", component: ApplicationDisplayComponent},
  {path: ROUTES_ENUM.ApplicationForm, component: ApplicationFormComponent},
  {path: ROUTES_ENUM.ApplicationForm + "/:id", component: ApplicationFormComponent},
  // default
  {path: "**", redirectTo: "dashboard"},
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
