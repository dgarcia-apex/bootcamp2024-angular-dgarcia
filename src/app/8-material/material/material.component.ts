import { Component } from '@angular/core';
import {  MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

export interface IUser {
  name: string;
} 

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss',
})
export class MaterialComponent {
  user: IUser = { name: ''};

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(UserDialogComponent, 
      { data: this.user, height: '300px', width: '300px', autoFocus: true });

    dialogRef.afterClosed().subscribe((result: IUser) => {
      this.user.name = result?.name;
    });
  }
}
