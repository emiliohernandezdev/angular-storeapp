import { Component, OnInit } from '@angular/core';
import { FirebaseDriverService } from './md/firebase-driver.service';
import { AuthService } from './md/auth.service';
import { UserService } from './md/user.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import { LoginComponent } from './login/login.component';
import * as firebase from 'firebase';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { Router } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StableAngularApp';
  public productList:Array<any>;
  public loadedProductList:Array<any>;
  public loadedCartList:Array<any>;
  public productRef:any;
  public cartRef:any;
  public cartItems:number = 50;
  public filter:string = "";
  constructor(public driver: FirebaseDriverService, public auth: AuthService, public user: UserService,
    public dialog: MatDialog, public snack: MatSnackBar, public router: Router,
    public snackBar: MatSnackBar){
    this.driver.InitApp();
    this.auth.VerifySession()
    this.initElements();
    this.InitCart();
  }

  ngAfterViewInit(){
    this.initElements();
    this.InitCart();
  }

  ngOnInit(){
    this.productRef = firebase.database().ref('/products');
    this.productRef.on('value', productL => {
      let products = [];
      productL.forEach(prd => {
        products.push(prd.val());
        return false;
      });

      this.productList = products;
      this.loadedProductList = products;


    });
    this.initElements();
    this.InitCart();

  }

  InitCart(){
    this.cartRef = firebase.database().ref('carts').orderByChild("owner").equalTo(this.user.getEmail())
    this.cartRef.on('value', s => {
      let prds = [];
      s.forEach(s => {
        prds.push(s.val())
        return false;
      })

      this.loadedCartList = prds;
    })

  }

  Login(){
    this.dialog.open(LoginComponent, {
      width: '500px',
      height: '500px'
    })

  }

  initElements(){
    this.productList = this.loadedProductList;
    this.InitCart();
  }

  getItems(searchbar){
    this.initElements();
    this.InitCart();

    var q = searchbar.srcElement.value;

    if(!q){
      return;
    }

    this.productList = this.productList.filter((v) => {
      if(v.name && q){
        if(v.name.toLowerCase().indexOf(q.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });

  }

  Search(){
    if(this.filter === ""){
      this.snackBar.open('Debes ingresar un criterio de búsqueda', 'Cerrar',{
        duration: 2500
      })
    }else{
      this.dialog.open(SearchResultsComponent, {
        width: '500px',
        height: '500px',
        data: {filter: this.filter, results: this.productList}
      })
    }
  }


  Logout(){
    firebase.auth().signOut()
    .then(() => {
      this.snack.open('Sesión cerrada con éxito', 'Cerrar', {
        duration: 2500
      })
      localStorage.removeItem('user');
    })
    .catch((err) => {
      this.snack.open('Error al cerrar sesión', 'Cerrar', {
        duration: 2500
      })
    })
  }

  Account(){

    this.dialog.open(AccountComponent, {
      height: '500px',
      width: '500px'
    })
  }

  Cart(){
    this.router.navigateByUrl('cart')

  }


}
