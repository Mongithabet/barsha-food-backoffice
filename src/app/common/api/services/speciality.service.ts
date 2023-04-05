import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from 'src/app/shared/constants/endpoints';
import { environment } from 'src/environments/environment';
import { CreateUpdateSpecialityDto } from '../../../features/admin/speciality-management/dtos/create-update-speciality.dto';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  constructor(private http: HttpClient) { }

  getAll = () => this.http.get(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.SPECIALITIES}`);
  create = (createUpdateSpecialityDto: CreateUpdateSpecialityDto) =>
    this.http.post(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.SPECIALITIES}`
      , createUpdateSpecialityDto);

  update = (id: string, createUpdateSpecialityDto: CreateUpdateSpecialityDto) =>
    this.http.patch(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.BACKOFFICE.SPECIALITIES}/${id}`
      , createUpdateSpecialityDto);

}

