import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeliveryCompany } from 'src/app/common/api/models/delivery-company.model';
import { DeliveryCompanyService } from 'src/app/common/api/services/delivery-company.service';
import { DeliveryManService } from 'src/app/common/api/services/delivery-man.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-preview-delivery-mans',
  templateUrl: './preview-delivery-mans.component.html',
  styleUrls: ['./preview-delivery-mans.component.scss']
})


export class PreviewDeliveryMansComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email','isActive','actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private deliveryCompanyService: DeliveryCompanyService,    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.server = environment.base_url;
  }

  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getDeliveryMans()
    
    
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

  getDeliveryMans = () => this.deliveryCompanyService.getOne(this.data.id).subscribe(
    (res: any) => {
      console.log('dataDeliveryMans==',res.data.deliveryMans);
       


      
      this.dataSource = new MatTableDataSource(res.data.deliveryMans);
    }
  )



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

