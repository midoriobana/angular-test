import { HomeComponent } from './home/home.component';
import { NavRouteLinks } from './shared/commons/NavRouteLinks';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: NavRouteLinks.PAGE.HOME, 
    pathMatch: 'full' 
  },
  {
    path: NavRouteLinks.PAGE.HOME,
    component: HomeComponent
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

