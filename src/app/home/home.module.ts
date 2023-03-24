import { HomeRoutingModule } from './home-routing.module';
import { AnuncieComponent } from './anuncie/anuncie.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    SobreComponent,
    AnuncieComponent,
    ContatoComponent
  ], 
  exports: [
    HomeComponent,
    SobreComponent,
    AnuncieComponent,
    ContatoComponent
  ]
})
export class HomeModule { }
