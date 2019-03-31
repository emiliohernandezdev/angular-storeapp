import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { AuthService } from './services/auth.service';
import { MatDialog } from '@angular/material';
import { DownloadComponent } from './download/download.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDs-UekALheW6tHX9zIOKSlC7N6vdT0NL0",
  authDomain: "storeappemiliohernandez.firebaseapp.com",
  databaseURL: "https://storeappemiliohernandez.firebaseio.com",
  projectId: "storeappemiliohernandez",
  storageBucket: "storeappemiliohernandez.appspot.com",
  messagingSenderId: "403195387808"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularStoreApp';

  ngOnInit(){
    firebase.initializeApp(firebaseConfig);
  }

  constructor(public auth: AuthService, public dialog: MatDialog){

  }

  Download(){
    const dialogRef = this.dialog.open(DownloadComponent, {
      width: '500px',
      height: '350px'
    })
  }

  Login(){
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '500px',
      height: '385px'
    })
  }

  Account(){
    const dialogRef = this.dialog.open(AccountComponent,{
      width: '500px',
      height: '390px'
    })
  }

  Cart(){
    const dialogRef = this.dialog.open(CartComponent,{
      width: '500px',
      height: '385px'
    })
  }

}
