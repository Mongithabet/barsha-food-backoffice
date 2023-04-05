import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestaurantOwnerService } from 'src/app/common/api/services/restaurant-owner.service';
import { FileService } from '../../../../../shared/services/file.service';

@Component({
  selector: 'app-create-update-restaurant-owner',
  templateUrl: './create-update-restaurant-owner.component.html',
  styleUrls: ['./create-update-restaurant-owner.component.scss']
})


export class CreateUpdateRestaurantOwnerComponent implements OnInit {
  public createRestaurantOwnerForm: FormGroup;
  restaurantOwners: any;
  files: File[] = [];
  constructor(
    public dialogRef: MatDialogRef<CreateUpdateRestaurantOwnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private fileService: FileService,
    private restaurantownerService: RestaurantOwnerService) {
    if (data) {
      this.createRestaurantOwnerForm = this.fb.group({
        name: [data.name, [Validators.required]],
        arName: [data.arName, [Validators.required]],
      });
    } else {
      this.createRestaurantOwnerForm = this.fb.group({
        name: ['', [Validators.required]],
        arName: ['', [Validators.required]],
      });
    }
  }


  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  ngOnInit(): void {

  }






}

