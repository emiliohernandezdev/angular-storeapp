import { Component, OnInit, Inject, AfterViewInit, NgZone } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import * as firebase from 'firebase';
import { UserService } from '../md/user.service';
import { HomeComponent } from '../home/home.component';
import { StartComponent } from '../start/start.component';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit, AfterViewInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public user: UserService, public dialogRef: MatDialogRef<HomeComponent>,
  public snack: MatSnackBar, public dRef: MatDialogRef<StartComponent>, private zone : NgZone) {
    this.Add();
   }
  item = this.data.item;
  values:number = 0;
  total:number = this.item.price;
  cart : any = "";
  cartData = [];
  referencia : any;
  ngOnInit() {
    this.zone.run(() => {
      this.Add();
    })
    
  }

  ngAfterViewInit(){
    this.Add();
  }

  calculate(){
    this.total = Math.round(this.values * this.item.price * 100) / 100;
    this.Add();
  }

  Add(){
    let r = firebase.database().ref('carts/').orderByChild("owner").equalTo(this.user.getEmail())
    r.on('value', snapshot => {
      this.cartData = [];
      this.cartData = snapshotToArray(snapshot);
    })
    for(var i=0; i < this.cartData.length; i++){
      this.cart = this.cartData[i].key;
    }
  }

  Save(){
    let ref = firebase.database().ref('carts/'+ this.cart).child('products')
    this.referencia = firebase.database().ref('carts/'+ this.cart).child('products')
    let newProduct = this.referencia.push()
    newProduct.set({
      name: this.item.name,
      price: this.item.price,
      code: this.item.code,
      units: this.values,
      image: this.item.image
    })
    .then(() => {
      this.snack.open('Producto agregado al carrito', 'Cerrar', {
        duration: 2500
      });
      this.dialogRef.close();
      this.dRef.close();
    })
    .catch(() => {
      this.snack.open('Error al guardar el producto', 'Cerrar', {
        duration: 2500
      });
      this.dialogRef.close();
      this.dRef.close();
    })
  }

}



export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};

