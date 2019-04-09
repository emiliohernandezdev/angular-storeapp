import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import * as firebase from 'firebase';
import { UserService } from '../md/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartRef:any;
  public loadedCartList:Array<any>;
  constructor(public user: UserService) {
   }

  ngOnInit() {
    this.cartRef = firebase.database().ref('carts').orderByChild("owner").equalTo(this.user.getEmail())
    this.cartRef.on('value', s => {
      let prds = [];
      s.forEach(s => {
        prds.push(s.val())
        return false;
      })

      this.loadedCartList = prds;
    })
    console.log(this.loadedCartList)
  }

}
