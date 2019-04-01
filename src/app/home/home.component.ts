import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DownloadComponent } from '../download/download.component';
import { FirebaseService } from '../services/firebase.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dialogRef:any;
  products : any

  nombre : string = 'sam'

  prod : any[] = [1, 2, 3,4 ]

  constructor(public dialog: MatDialog,
    public router: Router, public auth: FirebaseService, 
    private productsService: ProductsService ) { }

  ngOnInit() {
      //firebase.initializeApp(firebaseConfig);
    
    //this.auth.VerifySession();
    this.getProducts()
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


  getProducts(){
    this.productsService.getProducts().subscribe( data => {
      console.log(data)
      this.products = data
    })
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
