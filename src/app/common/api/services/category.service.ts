import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from 'src/app/shared/constants/endpoints';
import { environment } from 'src/environments/environment';
import { CreateUpdateCategoryDto } from '../../../features/admin/category-management/dtos/create-update-category.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll = () => this.http.get(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.CATEGORIES}`);

  
  create = (createUpdateCategoryDto: CreateUpdateCategoryDto) =>
    this.http.post(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.CATEGORIES}`
      , createUpdateCategoryDto);

  update = (id: string, createUpdateCategoryDto: CreateUpdateCategoryDto) =>
    this.http.patch(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.CATEGORIES}/${id}`
      , createUpdateCategoryDto);

      delete = (id: string) =>
      this.http.delete(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.CATEGORIES}/${id}`
        );

}
