import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferListComponent } from './pages/offer-list/offer-list.component';

const routes: Routes = [
  {
  component: OfferListComponent,
  path: ''
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferManagementRoutingModule { }
