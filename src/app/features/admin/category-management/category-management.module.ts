import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryManagementRoutingModule } from './category-management-routing.module';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CreateUpdateCategoryComponent } from './components/create-update-category/create-update-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CategoryListComponent,
    CreateUpdateCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryManagementRoutingModule,
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
export class CategoryManagementModule { }
