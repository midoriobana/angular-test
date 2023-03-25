import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { AdvertiseComponent } from './home/advertise/advertise.component';
import { ContactComponent } from './home/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavRouteLinks } from './shared/commons/NavRouteLinks';

const routes: Routes = [
  {
    path: NavRouteLinks.PAGE.HOME,
    component: HomeComponent
  },
  {
    path: NavRouteLinks.PAGE.ABOUT,
    component: AboutComponent
  },
  {
    path: NavRouteLinks.PAGE.ADVERTISE,
    component: AdvertiseComponent
  },
  {
    path: NavRouteLinks.PAGE.CONTACT,
    component: ContactComponent
  },
  {
		path: NavRouteLinks.PAGE.HOME,
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

