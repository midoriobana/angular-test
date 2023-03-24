import { ContatoComponent } from './home/contato/contato.component';
import { AnuncieComponent } from './home/anuncie/anuncie.component';
import { HomeComponent } from './home/home.component';
import { NavRouteLinks } from './shared/commons/NavRouteLinks';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './home/sobre/sobre.component';

const routes: Routes = [
  {
    path: NavRouteLinks.PAGE.HOME,
    component: HomeComponent
  },
  {
    path: NavRouteLinks.PAGE.ABOUT,
    component: SobreComponent
  },
  {
    path: NavRouteLinks.PAGE.ADVERTISE,
    component: AnuncieComponent
  },
  {
    path: NavRouteLinks.PAGE.CONTACT,
    component: ContatoComponent
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

