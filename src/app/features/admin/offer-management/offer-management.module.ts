import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferManagementRoutingModule } from './offer-management-routing.module';
import { OfferListComponent } from './pages/offer-list/offer-list.component';


@NgModule({
  declarations: [
    OfferListComponent
  ],
  imports: [
    CommonModule,
    OfferManagementRoutingModule
  ]
})
export class OfferManagementModule { }
