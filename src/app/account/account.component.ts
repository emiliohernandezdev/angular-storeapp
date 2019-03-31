import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import { MatSnackBar, MatDialogRef, MatDialog } from '@angular/material';
import { HomeComponent } from '../home/home.component';
import { UpdateAccountComponent } from '../update-account/update-account.component';
import { DeleteAccountComponent } from '../delete-account/delete-account.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  constructor(public auth: AuthService, public snackBar: MatSnackBar, public dialogRef: MatDialogRef<HomeComponent>,
    public dialog: MatDialog) { }
  name:string = this.auth.getName();
  email:string = this.auth.getEmail();
  phone:any = this.auth.getPhone();
  photo:string = this.auth.getUserPhoto();
  ngOnInit() {
  
  }

  Logout(){
    firebase.auth().signOut()
    .then(() => {
      this.snackBar.open('Se ha cerrado la sesión', 'Cerrar', {
        duration: 2000
      })
      this.dialogRef.close();
    })
    .catch((err) => {
      this.snackBar.open('Error al cerrar la sesión', 'Cerrar', {
        duration: 2000
      })
      this.dialogRef.close();
    })
  }


  UpdateAccount(){
    this.dialog.open(UpdateAccountComponent, {
      width: '500px',
      height: '350px'
    })
    
  }

  DeleteAccount(){
    this.dialog.open(DeleteAccountComponent, {
      width: '500px',
      height: '350px'
    })
  }

}
