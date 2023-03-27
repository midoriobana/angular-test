import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavRouteLinks } from 'src/app/shared/commons/NavRouteLinks';
import { DetailsComponent } from './../components/details/details.component';
import { AboutComponent } from './about/about.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
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
        path: NavRouteLinks.PAGE.DETAILS,
        component: DetailsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }