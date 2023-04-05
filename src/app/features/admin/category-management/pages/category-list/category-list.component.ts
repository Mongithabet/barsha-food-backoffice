import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { CreateUpdateCategoryComponent } from '../../components/create-update-category/create-update-category.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { CategoryService } from '../../../../../common/api/services/category.service';
import { Category } from '../../../../../common/api/models/category.model';
import { SpecialityService } from 'src/app/common/api/services/speciality.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'arName','actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private categoryService: CategoryService,private specialityService:SpecialityService) {
    this.server = environment.base_url;
  }

  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getCategories();
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

  getCategories = () => this.categoryService.getAll().subscribe(
    (res: any) => {
      console.log('data==',res);
      
      this.dataSource = new MatTableDataSource(res.data);
    }
  )

  openCreateUpdateDialog = (category?: Category) => {
    if (category) {
      const dialogRef = this.dialog.open(CreateUpdateCategoryComponent, {
        data: category,
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getCategories()
      });
    } else {
      const dialogRef = this.dialog.open(CreateUpdateCategoryComponent, {
        data: {},
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getCategories()
      });
    }

  }

  openDeleteDialog(id:string){
    if(confirm("Are you sure to delete ")) {
      this.categoryService.delete(id).subscribe(data=>{
        console.log(data);
        
      })   
  this.getCategories()
    }
/*   this.categoryService.delete(id).subscribe(data=>{
    console.log(data);
    
  }) */
  }

  alertConfirmation(id:string){
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
        this.categoryService.delete(id).subscribe(data=>{
          //console.log(data);
            this.getCategories()
        })   
  
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })
  }

}

export enum ActionEnum {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}