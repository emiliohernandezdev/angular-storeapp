import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import * as firebase from 'firebase'
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = "";
  password:string = "";
  constructor(public snackBar: MatSnackBar, public dialogRef: MatDialogRef<HomeComponent>) { }

  ngOnInit() {
  }

  Login(){
    if(this.email === "" || this.password	 === ""){
      let snack = this.snackBar.open('No puedes dejar campos vacíos', 'Cerrar', {
        duration: 2000
      })
    }else{
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        let snack = this.snackBar.open('Sesión iniciada con éxito', null, {
          duration: 2000
        })
        this.dialogRef.close();
      })
      .catch((err) => {
        if(err.code === "auth/wrong-password"){
          let snack = this.snackBar.open('Contraseña incorrecta', 'Cerrar', {
            duration: 2000
          })
        }else if(err.code === "auth/invalid-email"){
          let snack = this.snackBar.open('Correo electrónico no válido', 'Cerrar', {
            duration: 2000
          })
        }else if(err.code === "auth/user-not-found"){
          let snack = this.snackBar.open('El usuario con el correo ' + this.email + ' no existe', 'Cerrar', {
            duration: 2000
          })
        }else if(err.code === "auth/network-request-failed"){
          let snack = this.snackBar.open('No se pudo conectar a la red', 'Cerrar', {
            duration: 2000
          })
        }else if(err.code === "auth/user-disabled"){
          let snack = this.snackBar.open('El usuario ha sido deshabilitado', 'Cerrar', {
            duration: 2000
          })
        }else{
          let snack = this.snackBar.open('Ocurrió un error desconocido', 'Cerrar', {
            duration: 2000
          })
          this.dialogRef.close();
        }

      })
    }
  }

  Google(){
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider)
      .then(() => {
        let snack = this.snackBar.open('Sesión iniciada con éxito', 'Cerrar', {
          duration: 2000
        })
        this.dialogRef.close();
      })
      .catch(() => {
        let snack = this.snackBar.open('Ocurrió un error al iniciar sesión', 'Cerrar', {
          duration: 2000
        })
        this.dialogRef.close();
      })
  }

}
