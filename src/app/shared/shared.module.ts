import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxMaskModule } from 'ngx-mask';
import { HeaderComponent } from '../components/header/header.component';
import { CardComponent } from './../components/card/card.component';
import { FooterComponent } from './../components/footer/footer.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: false,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    NgxMaskModule.forChild(),
    CurrencyMaskModule
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
    NgxMaskModule,
    CurrencyMaskModule
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ]
})

export class SharedModule { }
