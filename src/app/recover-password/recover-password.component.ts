import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import * as firebase from 'firebase';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  email:string="";
  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  Recover(){
    if(this.email === ""){
      this.snackBar.open('No puedes dejar el correo electrónico vacío', 'Cerrar', {
        duration: 2500
      });
    }else{
      firebase.auth().sendPasswordResetEmail(this.email)
      .then(() => {
        this.snackBar.open('Mensaje enviado, revisa tu bandeja de entrada', 'Cerrar', {
          duration: 2500
        });
      })
      .catch((err) => {
       
        if(err.code==="auth/user-not-found"){
          this.snackBar.open('No hay usuarios registrados con ese correo', 'Cerrar', {
            duration: 2500
          });
        }else if(err.code==="auth/invalid-email"){
          this.snackBar.open('Email inválido', 'Cerrar', {
            duration: 2500
          });
        }else{
          this.snackBar.open('Ocurrió un error desconocido', 'Cerrar', {
            duration: 2500
          });
          console.log(err)
        }

      })
    }
  }
}
