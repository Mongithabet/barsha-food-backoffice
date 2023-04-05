import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { CreateUpdateSpecialityComponent } from '../../components/create-update-speciality/create-update-speciality.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { SpecialityService } from '../../../../../common/api/services/speciality.service';
import { Speciality } from '../../../../../common/api/models/speciality.model';
@Component({
  selector: 'app-speciality-list',
  templateUrl: './speciality-list.component.html',
  styleUrls: ['./speciality-list.component.scss']
})
export class SpecialityListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'arName', 'image', 'actions'];
  dataSource: MatTableDataSource<any>;
  server: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private specialityService: SpecialityService) {
    this.server = environment.base_url;
  }

  /*
  * --- HOOKS ---
  */

  ngOnInit(): void {
    this.getSpecialities();
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

  getSpecialities = () => this.specialityService.getAll().subscribe(
    (res: any) => {
      
      this.dataSource = new MatTableDataSource(res.data);
    }
  )

  openCreateUpdateDialog = (speciality?: Speciality) => {
    if (speciality) {
      const dialogRef = this.dialog.open(CreateUpdateSpecialityComponent, {
        data: speciality,
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getSpecialities()
      });
    } else {
      const dialogRef = this.dialog.open(CreateUpdateSpecialityComponent, {
        data: {},
        direction: 'rtl',
        width: '800px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) this.getSpecialities()
      });
    }

  }

}

export enum ActionEnum {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}