import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from '../../../shared/constants/endpoints';
import { environment } from '../../../../environments/environment';
import { CreateUpdateCustomerDto } from '../../../features/admin/customer-management/dtos/create-update-customer.dto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAll = () => this.http.get(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.CUSTOMERS}`);

  
  create = (createUpdateCustomerDto: CreateUpdateCustomerDto) =>
    this.http.post(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.CUSTOMERS}`
      , createUpdateCustomerDto);

  update = (id: string, createUpdateCustomerDto: CreateUpdateCustomerDto) =>
    this.http.patch(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.CUSTOMERS}/${id}`
      , createUpdateCustomerDto);

      delete = (id: string) =>
      this.http.delete(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.CUSTOMERS}/${id}`
        );

}
