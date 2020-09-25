import { Component, Inject, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { userModel } from '../userModel';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
})
export class UserDialogComponent {
  //Options for role select
  roles: string[] = ['new boi', 'bro', 'big boi', 'old boi'];
  // Update/Save depending on the form function
  formAction: string;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: userModel
  ) {
    if (data._id) this.formAction = 'Update';
    else this.formAction = 'Save';
    console.log(data);
  }

  //User form Group
  userForm = new FormGroup({
    _id: new FormControl(this.data._id, []),
    name: new FormControl(this.data.name, [
      Validators.required,
      Validators.maxLength(60),
      Validators.minLength(3),
    ]),
    email: new FormControl(this.data.email, [
      Validators.required,
      Validators.email,
    ]),
    role: new FormControl(this.data.role, [Validators.required]),
  });

  //on Cancel Click
  onNoClick(): void {
    this.dialogRef.close();
  }
}
