import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryCompanyListComponent } from './pages/delivery-company-list/delivery-company-list.component';

const routes: Routes = [{
  path: '',
  component: DeliveryCompanyListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryCompanyManagementRoutingModule { }
