import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { AdminComponent } from './components/admin/admin.component';
import {HomeComponent} from "./components/home/home.component";
import {UserListComponent} from "./components/user-list/user-list.component";
import {UserPageComponent} from "./components/user-page/user-page.component";
import {SharedModule} from "../shared/shared.module";
import {FeatureRoutingModule} from "./feature-routing.module";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [CommonModule, FeatureRoutingModule, SharedModule,],
  declarations: [
    UserPageComponent,
    UserListComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdminComponent,
  ],
  exports: [HomeComponent],
})
export class FeatureModule {}
