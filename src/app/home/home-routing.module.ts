import { NavRouteLinks } from 'src/app/shared/commons/NavRouteLinks';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { AnuncieComponent } from './anuncie/anuncie.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
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
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }