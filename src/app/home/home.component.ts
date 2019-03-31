import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DownloadComponent } from '../download/download.component';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dialogRef:any;
  constructor(public dialog: MatDialog,
    public router: Router, public auth: FirebaseService) { }

  ngOnInit() {
      //firebase.initializeApp(firebaseConfig);
    
    //this.auth.VerifySession();

  }

  Download(){
    this.dialogRef = this.dialog.open(DownloadComponent, {
      width: '500px',
      height: '350px'
    })
    
  }


  Close(){
    this.dialogRef.close();
  }


  Developers(param?:any){
    if(param === 'movil'){
      this.router.navigateByUrl('developers/mobile');
    }else if(param === 'web'){
      this.router.navigateByUrl('developers/web');
    }
  }

  ShowProducts(){
    this.router.navigateByUrl('products')
  }

}
