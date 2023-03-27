import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxMaskModule } from 'ngx-mask';
import { AlertComponent } from '../components/alert/alert.component';
import { HeaderComponent } from '../components/header/header.component';
import { CardComponent } from './../components/card/card.component';
import { DetailsComponent } from './../components/details/details.component';
import { FilterComponent } from './../components/filter/filter.component';
import { FooterComponent } from './../components/footer/footer.component';
import { InvalidFeedbackComponent } from './../components/invalid-feedback/invalid-feedback.component';


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
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgxMaskModule.forChild(),
    CurrencyMaskModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    FilterComponent,
    AlertComponent,
    InvalidFeedbackComponent,
    DetailsComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    FilterComponent,
    InvalidFeedbackComponent,
    AlertComponent,
    DetailsComponent,
    FormsModule,
    TooltipModule,
    ModalModule,
    NgxMaskModule,
    CurrencyMaskModule
  ],
  providers: [
    BsModalRef,
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ]
})

export class SharedModule { }
