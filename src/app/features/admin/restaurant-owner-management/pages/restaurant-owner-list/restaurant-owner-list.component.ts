import { Component, OnInit, ViewChild } from '@angular/core';
//import Swal from 'sweetalert2';
//import Swal from 'sweetalert2/dist/sweetalert2.js';

import { CreateUpdateRestaurantOwnerComponent } from '../../components/create-update-restaurant-owner/create-update-restaurant-owner.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { RestaurantOwnerService } from '../../../../../common/api/services/restaurant-owner.service';
import { RestaurantOwner } from '../../../../../common/api/models/restaurant-owner.model';

@Component({
  selector: 'app-restaurant-owner-list',
  templateUrl: './restaurant-owner-list.component.html',
  styleUrls: ['./restaurant-owner-list.component.scss']
})
export class RestaurantOwnerListComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email','isActive','actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private restaurantOwnerService: RestaurantOwnerService) {
    this.server = environment.base_url;
  }

  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getRestaurantOwners();
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

  getRestaurantOwners = () => this.restaurantOwnerService.getAll().subscribe(
    (res: any) => {
     // console.log('dataRestaurantOwners==',res);
      
      this.dataSource = new MatTableDataSource(res.data);
    }
  )

  openCreateUpdateDialog = (restaurantowner?: RestaurantOwner) => {
    if (restaurantowner) {
      const dialogRef = this.dialog.open(CreateUpdateRestaurantOwnerComponent, {
        data: restaurantowner,
        direction: 'rtl',
        width: '800px',
        autoFocus: false,
        maxHeight: '95vh'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getRestaurantOwners()
      });
    } else {
      const dialogRef = this.dialog.open(CreateUpdateRestaurantOwnerComponent, {
        data: {},
        direction: 'rtl',
        width: '800px',
        autoFocus: false,
        maxHeight: '95vh'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getRestaurantOwners()
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
        this.restaurantOwnerService.delete(id).subscribe(data=>{
          //console.log(data);
          
        })   
    this.getRestaurantOwners()
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