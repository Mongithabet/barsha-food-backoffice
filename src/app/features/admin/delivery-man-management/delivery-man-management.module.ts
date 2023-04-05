import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryManManagementRoutingModule } from './delivery-man-management-routing.module';
import { DeliveryManListComponent } from './pages/delivery-man-list/delivery-man-list.component';
import { CreateUpdateDeliveryManComponent } from './components/create-update-delivery-man/create-update-delivery-man.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DeliveryManListComponent,
    CreateUpdateDeliveryManComponent
  ],
  imports: [
    CommonModule,
    DeliveryManManagementRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgxDropzoneModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDialogModule
  ]
})
export class DeliveryManManagementModule { }
