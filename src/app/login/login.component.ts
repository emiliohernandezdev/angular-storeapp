import { Component, OnInit, Inject } from '@angular/core';
import {MatSnackBar, MatDialogRef, MatDialog} from '@angular/material';
import * as firebase from 'firebase';
import { HomeComponent } from '../home/home.component';
import { RecoverPasswordComponent } from '../recover-password/recover-password.component';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public snack: MatSnackBar, public dialogRef: MatDialogRef<HomeComponent>,
    public dialog: MatDialog){ }
  email:string="";
  password:string="";

  ngOnInit() {
  }

  DoLogin(){
    if(this.email === "" || this.password === ""){
      this.snack.open('No puedes dejar campos vacíos', 'Cerrar',{
        duration: 2500
      })
    }else{
      let charging = this.snack.open('Cargando...', null, {
      })
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((user) =>{
        charging.closeWithAction();
        this.dialogRef.close()
        this.snack.open('Sesión iniciada con éxito', null, {
          duration: 2500
        })
        let u = user;
        localStorage.setItem('user', JSON.stringify(u));
      })
      .catch((err) => {
        charging.closeWithAction();    
        if(err.code==="auth/invalid-email"){
          this.snack.open('Correo electronico inválido', 'Cerrar', {
            duration: 2500
          })
        }else if(err.code==="auth/user-not-found"){
          this.snack.open('El usuario no existe', 'Cerrar', {
            duration: 2500
          })
        }else if(err.code==="auth/wrong-password"){
          this.snack.open('Contraseña incorrecta', 'Cerrar', {
            duration: 2500
          })
        }
      })
    }
  }

  RecoverPassword(){
    this.dialog.open(RecoverPasswordComponent, {
      width: '500px',
      height: '300px'
    });
  }

  GoogleLogin(){
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider)
    .then(() => {
      this.snack.open('Sesión iniciada con éxito', 'Cerrar', {
        duration: 2500
      })
      this.dialogRef.close()
    })
    .catch(() => {
      this.snack.open('Error al iniciar sesión', 'Cerrar', {
        duration: 2500
      })
    })
  }

  Register(){
    this.dialog.open(RegisterComponent, {
      width: '500px',
      height: '440px'
    })
  }

}
