import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from '../md/auth.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ref = firebase.database().ref('messages/');
  name:string="";
  phone:string="";
  email:string="";
  comment:string="";
  constructor(public router: Router, public auth: AuthService, public snackBar: MatSnackBar,
    public dialog: MatDialog) { 

  }
  ngOnInit() {

  }

  Products(){

  }

  public Send(){
    if(firebase.auth().currentUser.email === null || firebase.auth().currentUser.email === undefined || firebase.auth().currentUser.email === ""){
      this.dialog.open(LoginComponent, {
        width: '450px',
        height: '450px'
      })
    }else{
      if(this.name === "" || this.phone === "" || this.email === "" || this.comment === ""){
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
