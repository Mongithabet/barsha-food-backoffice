import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/shared/guard/admin.guard';

const routes: Routes = [
  {
    path: 'specialities',
    canActivate: [AdminGuard],
    loadChildren: () => import('src/app/features/admin/speciality-management/speciality-management.module').then(m => m.SpecialityManagementModule)
  },
  {
    path: 'offers',
    canActivate: [AdminGuard],
    loadChildren: () => import('src/app/features/admin/offer-management/offer-management.module').then(m => m.OfferManagementModule)
  },
  {
    path: 'categories',
    canActivate: [AdminGuard],
    loadChildren: () => import('src/app/features/admin/category-management/category-management.module').then(m => m.CategoryManagementModule)
  },
  {
    path: 'customers',
    canActivate: [AdminGuard],
    loadChildren: () => import('src/app/features/admin/customer-management/customer-management.module').then(m => m.CustomerManagementModule)
  },
  {
    path: 'restaurantowners',
    canActivate: [AdminGuard],
    loadChildren: () => import('src/app/features/admin/restaurant-owner-management/restaurant-owner-management.module').then(m => m.RestaurantOwnerManagementModule)
  },
  {
    path: 'deliverymans',
    canActivate: [AdminGuard],
    loadChildren: () => import('src/app/features/admin/delivery-man-management/delivery-man-management.module').then(m => m.DeliveryManManagementModule)
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
