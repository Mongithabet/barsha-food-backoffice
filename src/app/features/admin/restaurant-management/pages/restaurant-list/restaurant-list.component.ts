import { Component, OnInit, ViewChild } from '@angular/core';
//import Swal from 'sweetalert2';
//import Swal from 'sweetalert2/dist/sweetalert2.js';

import { CreateUpdateRestaurantComponent } from '../../components/create-update-restaurant/create-update-restaurant.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { RestaurantService } from '../../../../../common/api/services/restaurant.service';
import { Restaurant } from '../../../../../common/api/models/restaurant.model';
import { SpecialityService } from 'src/app/common/api/services/speciality.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {


  displayedColumns: string[] = ['name', 'commercialRegister', 'expirationDate','verificationStatus','isActive','actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private restaurantService: RestaurantService) {
    this.server = environment.base_url;
  }

  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getRestaurants();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /*
  * --- CUSTOM METHODS ---
  */

  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
 
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilterApproved() {
    
    const filterValue = 'approved'
    this.dataSource.filter = filterValue.trim().toLowerCase();
 
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilterRejected() {
    
    const filterValue = 'rejected'
    this.dataSource.filter = filterValue.trim().toLowerCase();
 
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilterInreview() {
    
    const filterValue = 'inreview'
    this.dataSource.filter = filterValue.trim().toLowerCase();
 
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRestaurants = () => this.restaurantService.getAll().subscribe(
    (res: any) => {
      console.log('dataRestaurants==',res);
      
      this.dataSource = new MatTableDataSource(res.data);
    }
  )

  getRestaurantById = (id:string) => this.restaurantService.getById(id).subscribe(
    (res: any) => {
      console.log('dataRestaurantOne==',res);
      
    }
  )


approve(id:string){
 

  this.restaurantService.approve(id).subscribe(data=>{
    console.log(data);
    this.getRestaurants()
  })
}

reject(id:string){
  this.restaurantService.reject(id).subscribe(data=>{
    console.log(data);
    this.getRestaurants()
  })
}


  openCreateUpdateDialog = (restaurantowner?: Restaurant) => {
    if (restaurantowner) {
      const dialogRef = this.dialog.open(CreateUpdateRestaurantComponent, {
        data: restaurantowner,
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getRestaurants()
      });
    } else {
      const dialogRef = this.dialog.open(CreateUpdateRestaurantComponent, {
        data: {},
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getRestaurants()
      });
    }

  }


  /* alertConfirmation(id:string){
    Swal.fire({
      position: 'center',
      title: 'هل أنت متأكد من الحذف؟',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'نعم',
      cancelButtonText: 'لا'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'تم الحذف!',
          '',
          'success'
          
        )
        this.restaurantService.delete(id).subscribe(data=>{
          //console.log(data);
          
        })   
    this.getRestaurants()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })
  } */

}

export enum ActionEnum {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}