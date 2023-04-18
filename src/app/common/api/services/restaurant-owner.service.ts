import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from '../../../shared/constants/endpoints';
import { environment } from '../../../../environments/environment';
import { CreateUpdateRestaurantOwnerDto } from '../../../features/admin/restaurant-owner-management/dtos/create-update-restaurant-owner.dto';
import { CreateUpdateRestaurantDto } from 'src/app/features/admin/restaurant-management/dtos/create-update-restaurant.dto';

@Injectable({
  providedIn: 'root'
})
export class RestaurantOwnerService {

  constructor(private http: HttpClient) { }

  getAll = () => this.http.get(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.RESTAURANTOWNERS}`);

  
  create = (createUpdateRestaurantDto: CreateUpdateRestaurantDto) =>
  this.http.post(`${environment.base_url}/${environment.api_prefix}/auth/register/restaurant-owner`
    , createUpdateRestaurantDto);

}
