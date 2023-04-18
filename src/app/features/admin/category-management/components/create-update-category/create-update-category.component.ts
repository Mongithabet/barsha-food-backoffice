import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../../../../../common/api/services/category.service';
import { FileService } from '../../../../../shared/services/file.service';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { SpecialityService } from 'src/app/common/api/services/speciality.service';

@Component({
  selector: 'app-create-update-category',
  templateUrl: './create-update-category.component.html',
  styleUrls: ['./create-update-category.component.scss']
})
export class CreateUpdateCategoryComponent implements OnInit {
  public createCategoryForm: FormGroup;
  categories: any;
  files: File[] = [];
   
  @ViewChild('select') select: MatSelect;

  allSelected=false;
  specialities: any[] = [];
  SelectedSpecialities: any[] = [];
  constructor(private specialityService:SpecialityService,
    public dialogRef: MatDialogRef<CreateUpdateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private fileService: FileService,
    private categoryService: CategoryService) {
    if (data) {
      this.createCategoryForm = this.fb.group({
        name: [data.name, [Validators.required]],
        arName: [data.arName, [Validators.required]],
        specialities:['', [Validators.required]],
      });
    } else {
      this.createCategoryForm = this.fb.group({
        name: ['', [Validators.required]],
        arName: ['', [Validators.required]],
        specialities:['', [Validators.required]],
      });
    }
  }


  onRemove(event) {
    //console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  ngOnInit(): void {
this.getSpecialities()

  }

  createCategory = () => {
    if (this.createCategoryForm.valid) {
      this.categoryService.create({ ...this.createCategoryForm.getRawValue() }).subscribe(
        res => this.dialogRef.close(res)
      )
    }
  }





  updateCategory = () => {
    this.categoryService.update(this.data.id, { ...this.createCategoryForm.getRawValue() }).subscribe(
      res => this.dialogRef.close(res)
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
