import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products = [];
  
  constructor(private auth: AuthService, private productService : ProductsService ) { 

  }
  email:string= this.auth.getUserEmail();
  ref = firebase.database().ref('carts').child("owner").equalTo(this.email)
  data = firebase.database().ref('/products')

  ngOnInit() {
    
    //console.log(this.data)
    
    //console.log( this.productService.getHeroes() )
    //console.log( this.productService.getProducts() )
    /*this.ref.on('value', resp => {
      console.log(resp.val())
    })

    console.log(this.auth.getAllData())*/
  }

}
