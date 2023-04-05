import { Component, OnInit, ViewChild } from '@angular/core';

import { CreateUpdateDeliveryManComponent } from '../../components/create-update-delivery-man/create-update-delivery-man.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { DeliveryManService } from '../../../../../common/api/services/delivery-man.service';
import { DeliveryMan } from '../../../../../common/api/models/delivery-man.model';

@Component({
  selector: 'app-delivery-man-list',
  templateUrl: './delivery-man-list.component.html',
  styleUrls: ['./delivery-man-list.component.scss']
})
export class DeliveryManListComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email','isActive','actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private deliverymanService: DeliveryManService) {
    this.server = environment.base_url;
  }

  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getDeliveryMans();
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

  getDeliveryMans = () => this.deliverymanService.getAll().subscribe(
    (res: any) => {
      console.log('dataDeliveryMans==',res);
      
      this.dataSource = new MatTableDataSource(res.data);
    }
  )

  openCreateUpdateDialog = (restaurantowner?: DeliveryMan) => {
    if (restaurantowner) {
      const dialogRef = this.dialog.open(CreateUpdateDeliveryManComponent, {
        data: restaurantowner,
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getDeliveryMans()
      });
    } else {
      const dialogRef = this.dialog.open(CreateUpdateDeliveryManComponent, {
        data: {},
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getDeliveryMans()
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
        this.deliverymanService.delete(id).subscribe(data=>{
          //console.log(data);
          
        })   
    this.getDeliveryMans()
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