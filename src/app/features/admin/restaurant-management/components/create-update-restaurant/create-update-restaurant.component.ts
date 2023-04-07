import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestaurantService } from 'src/app/common/api/services/restaurant.service';
import { FileService } from '../../../../../shared/services/file.service';

@Component({
  selector: 'app-create-update-restaurant',
  templateUrl: './create-update-restaurant.component.html',
  styleUrls: ['./create-update-restaurant.component.scss']
})


export class CreateUpdateRestaurantComponent implements OnInit {
  public createRestaurantForm: FormGroup;
  restaurants: any;
  filesRegister: File[] = [];
  filesLogo: File[] = [];

  constructor(
    public dialogRef: MatDialogRef<CreateUpdateRestaurantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private fileService: FileService,
    private restaurantService: RestaurantService) {
     // console.log("ertrt==",data);
      
    if (data) {
      this.createRestaurantForm = this.fb.group({
        name: [data.name, [Validators.required]],
        commercialRegister: [data.commercialRegister, [Validators.required]],
        expirationDate: [data.expirationDate],

      });
    } else {
      this.createRestaurantForm = this.fb.group({
        name: ['', [Validators.required]],
        commercialRegister: ['', [Validators.required]],
        expirationDate: [data.expirationDate],

      });
    }
  }

  onRemoveLogo(event) {
  //  console.log(event);
    this.filesLogo.splice(this.filesLogo.indexOf(event), 1);
  }
  onRemoveRegister(event) {
   // console.log(event);
    this.filesRegister.splice(this.filesRegister.indexOf(event), 1);
  }

  ngOnInit(): void {

  }


  onSelectRegister(event) {
  //  console.log(event);
    this.filesRegister = [];
    this.filesRegister.push(...event.addedFiles);
  }

  onSelectLogo(event) {
   // console.log(event);
    this.filesLogo = [];
    this.filesLogo.push(...event.addedFiles);
  }

  createRestaurant = () => {
    if (this.filesRegister.length > 0 && this.filesLogo.length > 0 && this.createRestaurantForm.valid)
      this.fileService.uploadMultipleFile([this.filesRegister[0],this.filesLogo[0]]).subscribe(
        (res: any) => {
         // console.log('dataImage==',res[0].data.id);
        //  console.log('dataImage2==',res[1].data.id);

          this.restaurantService.create({ ...this.createRestaurantForm.getRawValue() , image:res[0].data.id,logo:res[1].data.id}).subscribe(
            res => {
                       // console.log('data==',this.createRestaurantForm.getRawValue);

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
}

