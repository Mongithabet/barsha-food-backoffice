import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpecialityService } from '../../../../../common/api/services/speciality.service';
import { FileService } from '../../../../../shared/services/file.service';

@Component({
  selector: 'app-create-update-speciality',
  templateUrl: './create-update-speciality.component.html',
  styleUrls: ['./create-update-speciality.component.scss']
})
export class CreateUpdateSpecialityComponent implements OnInit {
  public createSpecialityForm: FormGroup;
  categories: any;
  files: File[] = [];
  constructor(
    public dialogRef: MatDialogRef<CreateUpdateSpecialityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private fileService: FileService,
    private specialityService: SpecialityService) {
    if (data) {
      this.createSpecialityForm = this.fb.group({
        name: [data.name, [Validators.required]],
        arName: [data.arName, [Validators.required]],
      });
    } else {
      this.createSpecialityForm = this.fb.group({
        name: ['', [Validators.required]],
        arName: ['', [Validators.required]],
      });
    }
  }

  onSelect(event) {
    console.log(event);
    this.files = [];
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  ngOnInit(): void {

  }

  createSpeciality = () => {
    if (this.files.length > 0 && this.createSpecialityForm.valid)
      this.fileService.uploadFile(this.files[0]).subscribe(
        (res: any) => {
       //   console.log('data==',res.data.id);

          this.specialityService.create({ ...this.createSpecialityForm.getRawValue(), image: res.data.id }).subscribe(
            res => {
             // console.log(res);
              
                          this.dialogRef.close(res)

            }
            
            
          )
        }
      )
  }

  updateSpeciality = () => {
    if (this.files.length == 0)
      this.specialityService.update(this.data.id, { ...this.createSpecialityForm.getRawValue() }).subscribe(
        res => this.dialogRef.close(res)
      )
    else {
      this.fileService.uploadFile(this.files[0]).subscribe(
        (res: any) => {
          this.specialityService.update(this.data.id, { ...this.createSpecialityForm.getRawValue(), image: res.data.id }).subscribe(
            res => this.dialogRef.close(res)
          )
        }
      )
    }
  }
}
