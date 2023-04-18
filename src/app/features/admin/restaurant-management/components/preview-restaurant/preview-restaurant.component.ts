import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestaurantService } from 'src/app/common/api/services/restaurant.service';
import { FileService } from '../../../../../shared/services/file.service';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { SpecialityService } from 'src/app/common/api/services/speciality.service';

@Component({
  selector: 'app-preview-restaurant',
  templateUrl: './preview-restaurant.component.html',
  styleUrls: ['./preview-restaurant.component.scss']
})


export class PreviewRestaurantComponent implements OnInit {

  allSelected=false;
   specialities: any[] = [];
   restaurant: any;
   imgUrl:any;

  public createRestaurantForm: FormGroup;
  restaurants: any;
  filesRegister: File[] = [];
  filesLogo: File[] = [];
  logoUrl: string;
  special: any;

  constructor(
    public dialogRef: MatDialogRef<PreviewRestaurantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private restaurantService: RestaurantService,
    private specialityService:SpecialityService) {}


  ngOnInit(): void {
    this.getRestaurantById(this.data.id)    
   //console.log(this.data);
   
   
  }






  getRestaurantById = (id:string) => this.restaurantService.getById(id).subscribe(
    (res: any) => {
   
    this.restaurant=res.data
       console.log('dataRestaurantOne==',this.restaurant.specialities.map(x=>x.arName));
       this.imgUrl= `assets/uploads/${this.restaurant.image.filename}`
       this.logoUrl= `assets/uploads/${this.restaurant.image.filename}`
       this.special=this.restaurant.specialities.map(x=>x.arName)
      // /Users/macbookair/Desktop/BARSHAFOOD/barsha-food-api/uploads/
    }
  )





  getSpecialities = () => this.specialityService.getAll().subscribe(
    (res: any) => {
      
      this.specialities=res.data
      
      
    }
  )
}

