import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(public router: Router, public dialogRef: MatDialogRef<HomeComponent>, public activated: ActivatedRoute) { }
  param:string = this.activated.snapshot.params.version;
  ngOnInit() {
  }

  
  DownloadStable(){
    this.router.navigateByUrl('download/stable')
    .then(() => {
      this.dialogRef.close();
    })
  }

  DownloadBeta(){
    this.router.navigateByUrl('download/beta')
    .then(() =>{
      this.dialogRef.close();
    })
  }

}
