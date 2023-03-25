import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from './../shared/shared.module';
import { AdvertiseComponent } from './advertise/advertise.component';
import { ContactComponent } from './contact/contact.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule,
    NgxMaskModule.forChild(),
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    AdvertiseComponent,
    ContactComponent
  ], 
  exports: [
    HomeComponent,
    AboutComponent,
    AdvertiseComponent,
    ContactComponent,
    NgxMaskModule
  ]
})
export class HomeModule { }
