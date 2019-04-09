import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import * as firebase from 'firebase';
import { AdsService } from '../ads.service';
import { UserService } from '../md/user.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  name:string="";
  phone:string="";
  
  comment:string="";
  ref = firebase.database().ref('messages/')
  chats = [];
  constructor(public snackBar: MatSnackBar, public ad: AdsService, public user: UserService,
    public dialog: MatDialog, public router: Router) { }
  

  ngOnInit() {

  }

load(){
  let ref2 = firebase.database().ref('messages/').orderByChild("sender").equalTo(firebase.auth().currentUser.email)
  ref2.on('value',a=>{
    let p = [];
    a.forEach(s => {
      p.push(a.val())
      return false;
    })
    console.log(p)
  });
}
  
  Products(){
    this.router.navigateByUrl('show/products');
  }

  public Send(){
    if(this.user.getEmail() === null){
      this.dialog.open(LoginComponent, {
        width: '450px',
        height: '500px'
      })
    }else{
      if(this.name === "" || this.phone === "" || this.comment === ""){
        this.snackBar.open('No puedes dejar campos vacíos', 'Cerrar',{
          duration: 2500
        })
      }else{
        let newMessage = this.ref.push()
        newMessage.set({
          name: this.name,
          phone: this.phone,
          email: firebase.auth().currentUser.email,
          comment: this.comment
        })
        .then(() => {
          this.snackBar.open('¡Mensaje enviado!', 'Cerrar',{
            duration: 2500
          })
        })
        .catch((err) => {
          this.snackBar.open('Ha ocurrido un error al enviar el mensaje', 'Cerrar',{
            duration: 2500
          })
        })
      }
    }

  }

}
