import { Component, OnInit, ViewChild } from '@angular/core';
//import Swal from 'sweetalert2';
//import Swal from 'sweetalert2/dist/sweetalert2.js';

import { CreateUpdateCustomerComponent } from '../../components/create-update-customer/create-update-customer.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { CustomerService } from '../../../../../common/api/services/customer.service';
import { Customer } from '../../../../../common/api/models/customer.model';
import { SpecialityService } from 'src/app/common/api/services/speciality.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email','phone','isActive','actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private customerService: CustomerService,private specialityService:SpecialityService) {
    this.server = environment.base_url;
  }

  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getCustomers();
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

  getCustomers = () => this.customerService.getAll().subscribe(
    (res: any) => {
      console.log('dataCustomers==',res);
      
      this.dataSource = new MatTableDataSource(res.data);
    }
  )

  openCreateUpdateDialog = (customer?: Customer) => {
    if (customer) {
      const dialogRef = this.dialog.open(CreateUpdateCustomerComponent, {
        data: customer,
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getCustomers()
      });
    } else {
      const dialogRef = this.dialog.open(CreateUpdateCustomerComponent, {
        data: {},
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getCustomers()
      });
    }

  }

  openDeleteDialog(id:string){
    if(confirm("Are you sure to delete ")) {
      this.customerService.delete(id).subscribe(data=>{
        console.log(data);
        
      })   
  this.getCustomers()
    }
/*   this.customerService.delete(id).subscribe(data=>{
    console.log(data);
    
  }) */
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
        this.customerService.delete(id).subscribe(data=>{
          //console.log(data);
          
        })   
    this.getCustomers()
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