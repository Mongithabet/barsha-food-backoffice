import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  DeliveryCompanyManagementRoutingModule } from './delivery-company-management-routing.module';
import { DeliveryCompanyListComponent } from './pages/delivery-company-list/delivery-company-list.component';
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
import { PreviewDeliveryMansComponent } from './components/preview-delivery-mans/preview-delivery-mans.component';

@NgModule({
  declarations: [
    DeliveryCompanyListComponent,
    PreviewDeliveryMansComponent
  ],
  imports: [
    CommonModule,
    DeliveryCompanyManagementRoutingModule,
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
export class DeliveryCompanyManagementModule { }
