import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string = "";
  password:string = "";
  constructor(public snackBar: MatSnackBar, public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  DoRegister(){
    if(this.email === "" || this.password === ""){
      this.snackBar.open('No puede dejar campos vacíos', 'Cerrar',{
        duration: 2500
      })
    }else{
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.snackBar.open('Te has registrado con éxito', 'Cerrar',{
          duration: 2500
        })
        this.dialogRef.close();
      })
      .catch((err) => {
        console.log(err)
        if(err.code === "auth/email-already-in-use"){
          this.snackBar.open('Correo electrónico ya está en uso', 'Cerrar',{
            duration: 2500
          })
        }else if(err.code === "auth/invalid-email"){
          this.snackBar.open('Correo electrónico inválido', 'Cerrar',{
            duration: 2500
          })
        }else{
          this.snackBar.open('Ocurrió un error desconocido', 'Cerrar',{
            duration: 2500
          })
        }
      })
    }
    
  }

}
