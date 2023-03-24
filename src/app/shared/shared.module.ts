import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { CardComponent } from './../components/card/card.component';
import { FooterComponent } from './../components/footer/footer.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    TooltipModule.forRoot(),
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    TooltipModule
  ]
})
export class SharedModule { }
