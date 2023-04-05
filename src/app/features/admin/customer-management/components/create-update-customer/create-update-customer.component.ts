import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from 'src/app/common/api/services/customer.service';
import { FileService } from '../../../../../shared/services/file.service';

@Component({
  selector: 'app-create-update-customer',
  templateUrl: './create-update-customer.component.html',
  styleUrls: ['./create-update-customer.component.scss']
})
export class CreateUpdateCustomerComponent implements OnInit {
  public createCustomerForm: FormGroup;
  categories: any;
  files: File[] = [];
  constructor(
    public dialogRef: MatDialogRef<CreateUpdateCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private fileService: FileService,
    private customerService: CustomerService) {
    if (data) {
      this.createCustomerForm = this.fb.group({
        name: [data.name, [Validators.required]],
        arName: [data.arName, [Validators.required]],
      });
    } else {
      this.createCustomerForm = this.fb.group({
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

  createCustomer = () => {
    if (this.createCustomerForm.valid) {
      this.customerService.create({ ...this.createCustomerForm.getRawValue() }).subscribe(
        res => this.dialogRef.close(res)
      )
    }
  }





  updateCustomer = () => {
    this.customerService.update(this.data.id, { ...this.createCustomerForm.getRawValue() }).subscribe(
      res => this.dialogRef.close(res)
    )

  }

}

