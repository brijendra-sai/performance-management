import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { userModel } from '../userModel';
import { UserService } from '../user.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  //Column List
  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];
  //table data
  dataSource: MatTableDataSource<userModel>;
  //Users List
  userList: userModel[];

  //Form Control for filter
  filter = new FormControl('');

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userService: UserService, public dialog: MatDialog) {}

  //Soft deletes the user document and gets latest user list
  handleDelete(_id: string) {
    this.userService.deleteUser(_id).subscribe(() => {
      this.userService
        .getUsersList()
        .subscribe((users) => this.initializeTable(users));
    });
  }

  //open user dialog with selected user to update
  handleEdit(user: userModel) {
    this.openDialog(user);
  }

  // Initializes table with data and adds pagination and sort features
  initializeTable(users) {
    this.userList = users;
    this.dataSource = new MatTableDataSource(this.userList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //opens user dialog
  openDialog(user: userModel = new userModel()) {
    console.log('user: ', user);
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px',
      data: user,
    });

    //handles closing dialog
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: `, result);
      //Handles Updating User
      if (result && result._id)
        this.userService.updateUser(result._id, result).subscribe(() => {
          this.userService
            .getUsersList()
            .subscribe((users) => this.initializeTable(users));
        });
      //Handles Creating User
      else
        this.userService.addUser(result).subscribe(() => {
          this.userService
            .getUsersList()
            .subscribe((users) => this.initializeTable(users));
        });
    });
  }

  //gets users on init
  ngOnInit() {
    this.userService.getUsersList().subscribe((users) => {
      this.initializeTable(users);
      this.paginator._intl.itemsPerPageLabel = 'Rows per page';
      this.paginator._formFieldAppearance = "outline";
      this.openDialog();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
