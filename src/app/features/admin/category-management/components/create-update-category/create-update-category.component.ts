                                                        import { Component, Inject, OnInit } from '@angular/core';
                                                        import { FormBuilder, FormGroup, Validators } from '@angular/forms';
                                                        import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
                                                        import { CategoryService } from '../../../../../common/api/services/category.service';
                                                        import { FileService } from '../../../../../shared/services/file.service';

                                                        @Component({
                                                          selector: 'app-create-update-category',
                                                          templateUrl: './create-update-category.component.html',
                                                          styleUrls: ['./create-update-category.component.scss']
                                                        })
                                                        export class CreateUpdateCategoryComponent implements OnInit {
                                                          public createCategoryForm: FormGroup;
                                                          categories: any;
                                                          files: File[] = [];
                                                          constructor(
                                                            public dialogRef: MatDialogRef<CreateUpdateCategoryComponent>,
                                                            @Inject(MAT_DIALOG_DATA) public data: any,
                                                            private fb: FormBuilder,
                                                            private fileService: FileService,
                                                            private categoryService: CategoryService) {
                                                            if (data) {
                                                              this.createCategoryForm = this.fb.group({
                                                                name: [data.name, [Validators.required]],
                                                                arName: [data.arName, [Validators.required]],
                                                              });
                                                            } else {
                                                              this.createCategoryForm = this.fb.group({
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

                                                          createCategory = () => {
                                                            if (this.createCategoryForm.valid){
                                                                this.categoryService.create({ ...this.createCategoryForm.getRawValue()}).subscribe(
                                                                    res => this.dialogRef.close(res)
                                                                  )
                                                                }
                                                            }
                                                              
                                                                
                                                              
                                                          

                                                          updateCategory = () => {
                                                              this.categoryService.update(this.data.id, { ...this.createCategoryForm.getRawValue() }).subscribe(
                                                                res => this.dialogRef.close(res)
                                                              )

                                                          }
                                                        }
