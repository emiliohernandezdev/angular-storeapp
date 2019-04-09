import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, public snackBar: MatSnackBar) { }
  item = this.data.item;
  ngOnInit() {
  }


  AddToCart(i = this.item){
    if(this.item.stock < 1){
      this.snackBar.open('No hay existencias de este producto', 'Cerrar', {
        duration: 2500
      })
    }else{
      this.dialog.open(AddToCartComponent, {
        height: '415px',
        width: '500px',
        data: {item: i}
      })
    }

    
  }
}
