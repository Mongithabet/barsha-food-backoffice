import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantOwnerListComponent } from './pages/restaurant-owner-list/restaurant-owner-list.component';

const routes: Routes = [{
  path: '',
  component: RestaurantOwnerListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantOwnerManagementRoutingModule { }
