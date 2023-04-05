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
  files: File[] = [];
  constructor(
    public dialogRef: MatDialogRef<CreateUpdateRestaurantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private fileService: FileService,
    private restaurantownerService: RestaurantService) {
    if (data) {
      this.createRestaurantForm = this.fb.group({
        name: [data.name, [Validators.required]],
        arName: [data.arName, [Validators.required]],
      });
    } else {
      this.createRestaurantForm = this.fb.group({
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

