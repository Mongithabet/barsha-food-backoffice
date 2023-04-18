import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { DeliveryCompanyService } from '../../../../../common/api/services/delivery-company.service';
import { DeliveryCompany } from '../../../../../common/api/models/delivery-company.model';
import { PreviewDeliveryMansComponent } from '../../components/preview-delivery-mans/preview-delivery-mans.component';

@Component({
  selector: 'app-delivery-company-list',
  templateUrl: './delivery-company-list.component.html',
  styleUrls: ['./delivery-company-list.component.scss']
})
export class DeliveryCompanyListComponent implements OnInit {

  displayedColumns: string[] = ['companyName', 'phone', 'email','isActive','actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private deliverycompanyService: DeliveryCompanyService) {
    this.server = environment.base_url;
  }

  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getDeliveryCompanies();
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

  getDeliveryCompanies = () => this.deliverycompanyService.getAll().subscribe(
    (res: any) => {
      console.log('dataDeliveryCompanys==',res);
      
      this.dataSource = new MatTableDataSource(res.data);
    }
  )

  openCreateUpdateDialog = (restaurantowner?: DeliveryCompany) => {
    if (restaurantowner) {
      const dialogRef = this.dialog.open(PreviewDeliveryMansComponent, {
        data: restaurantowner,
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getDeliveryCompanies()
      });
    } else {
      const dialogRef = this.dialog.open(PreviewDeliveryMansComponent, {
        data: {},
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getDeliveryCompanies()
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
        this.deliverycompanyService.delete(id).subscribe(data=>{
          //console.log(data);
          
        })   
    this.getDeliveryCompanies()
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