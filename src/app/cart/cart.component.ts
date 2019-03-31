import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products = [];
  
  constructor(private auth: AuthService) { }
  email:string= this.auth.getUserEmail();
  ref = firebase.database().ref('carts').child("owner").equalTo(this.email)
  ngOnInit() {
    this.ref.on('value', resp => {
      console.log(resp.val())
    })

    console.log(this.auth.getAllData())
  }

}
