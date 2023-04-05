import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from 'src/app/shared/constants/endpoints';
import { LoginDto } from '../dtos/login.dto';
import { environment } from 'src/environments/environment';
import { RegisterDto } from '../dtos/register.dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, public router: Router) { }

  loginAdmin = (loginDto: LoginDto) => this.http.post(`${environment.base_url}/${environment.api_prefix}/${endpoints.ADMIN.LOGIN}`, loginDto);

  getAdmin = () => JSON.parse(localStorage.getItem('admin')) 
  SignOut() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    const admin = localStorage.getItem('admin')
    localStorage.clear();
    if (admin) this.router.navigate(['/auth/login']);
  }
}
