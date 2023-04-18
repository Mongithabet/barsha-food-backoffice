import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileService } from '../../../../../shared/services/file.service';
import { MatOption } from '@angular/material/core';
import { RestaurantService } from 'src/app/common/api/services/restaurant.service';
import { SpecialityService } from 'src/app/common/api/services/speciality.service';
import { MatSelect } from '@angular/material/select';
import { RestaurantOwnerService } from 'src/app/common/api/services/restaurant-owner.service';

@Component({
  selector: 'app-create-update-restaurant-owner',
  templateUrl: './create-update-restaurant-owner.component.html',
  styleUrls: ['./create-update-restaurant-owner.component.scss']
})


export class CreateUpdateRestaurantOwnerComponent implements OnInit {
 
  @ViewChild('select') select: MatSelect;

  allSelected=false;
  specialities: any[] = [];
  SelectedSpecialities: any[] = [];


 public createRestaurantOwnerForm: FormGroup;
 public createRestaurantForm: FormGroup;

 restaurants: any;
 filesRegister: File[] = [];
 filesLogo: File[] = [];

 constructor(
   public dialogRef: MatDialogRef<CreateUpdateRestaurantOwnerComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any,
   private fb: FormBuilder,
   private fileService: FileService,
   private RestaurantOwnerService: RestaurantOwnerService,
   private specialityService:SpecialityService) {
  
 }


 
 onRemoveLogo(event) {

   this.filesLogo.splice(this.filesLogo.indexOf(event), 1);
 }
 onRemoveRegister(event) {

   this.filesRegister.splice(this.filesRegister.indexOf(event), 1);
 }

 ngOnInit(): void {
  this.createRestaurantOwnerForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    password: ['', [Validators.required]],

    
  
    
  
 
  });
  this.createRestaurantForm = this.fb.group({

    
    name: ['', [Validators.required]],
    commercialRegister: ['', [Validators.required]],
    expirationDate: ['', [Validators.required]],
    description: ['', [Validators.required]],
    street: ['', [Validators.required]],
    specialities:['', [Validators.required]],
    
  
    
  
 
  });
 this.getSpecialities()
 //console.log(this.createRestaurantOwnerForm.value);
 
 }


 onSelectRegister(event) {

   this.filesRegister = [];
   this.filesRegister.push(...event.addedFiles);
 }

 onSelectLogo(event) {
   this.filesLogo = [];
   this.filesLogo.push(...event.addedFiles);
 }

 createRestaurantOwner = () => {
 
   if (this.filesRegister.length > 0 && this.filesLogo.length > 0 && this.createRestaurantOwnerForm.valid)
     this.fileService.uploadMultipleFile([this.filesRegister[0],this.filesLogo[0]]).subscribe(
       (res: any) => {

         this.RestaurantOwnerService.create({...this.createRestaurantOwnerForm.getRawValue(),
          restaurant: {...this.createRestaurantForm.getRawValue(), image:res[0].data.id,logo:res[1].data.id}}).subscribe(
           res => {
            console.log(res);
            
                         this.dialogRef.close(res)

           }
           
           
         )
       }
     ) 
    
   
     

     
 }




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

