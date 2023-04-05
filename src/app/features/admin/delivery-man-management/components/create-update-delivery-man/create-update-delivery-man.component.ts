import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeliveryManService } from 'src/app/common/api/services/delivery-man.service';
import { FileService } from '../../../../../shared/services/file.service';

@Component({
  selector: 'app-create-update-delivery-man',
  templateUrl: './create-update-delivery-man.component.html',
  styleUrls: ['./create-update-delivery-man.component.scss']
})


export class CreateUpdateDeliveryManComponent implements OnInit {
  public createDeliveryManForm: FormGroup;
  deliveryMans: any;
  files: File[] = [];
  constructor(
    public dialogRef: MatDialogRef<CreateUpdateDeliveryManComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {
    if (data) {
      this.createDeliveryManForm = this.fb.group({
        name: [data.name, [Validators.required]],
        arName: [data.arName, [Validators.required]],
      });
    } else {
      this.createDeliveryManForm = this.fb.group({
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

