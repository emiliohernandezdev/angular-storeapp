import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AccountComponent>) { }

  ngOnInit() {
  
  }

  Delete(){

  }

  Cancel(){
    this.dialogRef.close();
  }

}
