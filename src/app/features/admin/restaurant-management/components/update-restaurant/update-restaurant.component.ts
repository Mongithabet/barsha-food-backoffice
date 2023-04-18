import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestaurantService } from 'src/app/common/api/services/restaurant.service';
import { FileService } from '../../../../../shared/services/file.service';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { SpecialityService } from 'src/app/common/api/services/speciality.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.scss']
})


export class UpdateRestaurantComponent implements OnInit {
  @ViewChild('select') select: MatSelect;

  allSelected=false;
   specialities: any[] = [];


  public createRestaurantForm: FormGroup;
  restaurants: any;
  filesRegister: File[] = [];
  filesLogo: File[] = [];

  constructor(
    public dialogRef: MatDialogRef<UpdateRestaurantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private fileService: FileService,
    private restaurantService: RestaurantService,
    private specialityService:SpecialityService) {
     // console.log("ertrt==",data);
      
    if (data) {
      this.createRestaurantForm = this.fb.group({
        name: [data.name, [Validators.required]],
        description: [data.description, [Validators.required]],

        commercialRegister: [data.commercialRegister, [Validators.required]],
        expirationDate: [data.expirationDate, [Validators.required]],
        street: [data.street, [Validators.required]],
        specialities:[data.specialities,[Validators.required]]

      });
    } else {
      this.createRestaurantForm = this.fb.group({
        name: ['', [Validators.required]],
        commercialRegister: ['', [Validators.required]],
        expirationDate: ['', [Validators.required]],
        description: ['', [Validators.required]],
        street: ['', [Validators.required]],
        specialities:['',[Validators.required]]

      });
    }
  }

  onRemoveLogo(event) {

    this.filesLogo.splice(this.filesLogo.indexOf(event), 1);
  }
  onRemoveRegister(event) {

    this.filesRegister.splice(this.filesRegister.indexOf(event), 1);
  }

  ngOnInit(): void {
  this.getSpecialities()
  }


  onSelectRegister(event) {

    this.filesRegister = [];
    this.filesRegister.push(...event.addedFiles);
  }

  onSelectLogo(event) {
    this.filesLogo = [];
    this.filesLogo.push(...event.addedFiles);
  }

  createRestaurant = () => {
  
    
    if (this.filesRegister.length > 0 && this.filesLogo.length > 0 && this.createRestaurantForm.valid)
      this.fileService.uploadMultipleFile([this.filesRegister[0],this.filesLogo[0]]).subscribe(
        (res: any) => {

          this.restaurantService.create({ ...this.createRestaurantForm.getRawValue() , image:res[0].data.id,logo:res[1].data.id}).subscribe(
            res => {

                          this.dialogRef.close(res)

            }
            
            
          )
        }
      )
  }
/* 
  updateRestaurant = () => {
    if (this.files.length == 0)
      this.restaurantService.update(this.data.id, { ...this.createRestaurantForm.getRawValue() }).subscribe(
        res => this.dialogRef.close(res)
      )
    else {
      this.fileService.uploadFile(this.files[0]).subscribe(
        (res: any) => {
          this.restaurantService.update(this.data.id, { ...this.createRestaurantForm.getRawValue(), image: res.data.id }).subscribe(
            res => this.dialogRef.close(res)
          )
        }
      )
    }
  } */




  onSelectSpeciality() {
    let newStatus = true;

    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
        newStatus = false;
      }
      
      

    });
  }

  getSpecialities = () => this.specialityService.getAll().subscribe(
    (res: any) => {
      this.specialities=res.data
    
      
    }
  )
}

