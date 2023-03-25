import { NgxMaskModule } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HeaderComponent } from '../components/header/header.component';
import { CardComponent } from './../components/card/card.component';
import { FooterComponent } from './../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    NgxMaskModule.forChild()
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
    TooltipModule,
    NgxMaskModule
  ]
})
export class SharedModule { }
