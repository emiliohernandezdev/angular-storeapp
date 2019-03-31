import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DownloadComponent } from '../download/download.component';

@Component({
  selector: 'app-finishdownload',
  templateUrl: './finishdownload.component.html',
  styleUrls: ['./finishdownload.component.css']
})
export class FinishdownloadComponent implements OnInit {
  version:string;
  bindText:string;
  countdownTimer;
  seconds = 5;
  constructor(public dialogRef: MatDialogRef<DownloadComponent>, private rutaActiva: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.dialogRef.close()
    this.version = this.rutaActiva.snapshot.params.version;
    if(this.version === "stable"){
      console.log('Descargará estable!')
      this.bindText = "estable";
    }else if(this.version === "beta"){
      console.log('Descargará beta!')
      this.bindText = "beta";
    }else{
      this.bindText = ""
    }
    console.log(this.rutaActiva.snapshot.params.version)
    
  }

  Download(){
    if(this.version === "beta"){
      window.open('https://firebasestorage.googleapis.com/v0/b/storeappemiliohernandez.appspot.com/o/Resources%2FAndroid%2FBeta%2FStoreAppBeta_v013.apk?alt=media&token=d48edf45-104b-4ae9-94eb-520572b6e93a', '_blank')
      this.router.navigateByUrl('home');
    }else if(this.version === "stable"){
      window.open('https://firebasestorage.googleapis.com/v0/b/storeappemiliohernandez.appspot.com/o/Resources%2FAndroid%2FStable%2Fapp-debug.apk?alt=media&token=20038ece-2504-43b7-8aba-64b3f47606c5', '_blank')
      this.router.navigateByUrl('home');
    }
  }

  Home(){
    this.router.navigateByUrl('home');
  }

}
