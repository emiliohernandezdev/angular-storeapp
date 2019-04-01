import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Ptor } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  VerifySession(){
    let user = firebase.auth().currentUser;
    if(user){
      return true;
    }else{
      return false;
    }
  }

  getUserId(){
    let user = firebase.auth().currentUser;
    if(user){
      return user.uid;
    }else{
      return null;
    }
  }

  getUserEmail(){
    let user = firebase.auth().currentUser;
    if(user){
      return user.email;
    }else{
      return null;
    }
  }

  getUserPhoto(){
    let user = firebase.auth().currentUser;
    if(user){
      return user.photoURL;
    }else{
      return null;
    }
  }

  getAllData(){
    let user = firebase.auth().currentUser;
    if(user){
      return firebase.auth().currentUser;
    }else{
      return null;
    }
    
  }

  getPhone(){
    let user = firebase.auth().currentUser;
    if(user){
      return firebase.auth().currentUser.phoneNumber;
    }else{
      return null;
    }
  }

  getVerified(){
    let user = firebase.auth().currentUser;
    if(user){
      return firebase.auth().currentUser.emailVerified;
    }else{
      return null;
    }
  }

  getName(){
    let user = firebase.auth().currentUser;
    if(user){
      return firebase.auth().currentUser.displayName;
    }else{
      return null;
    }
    
  }

  getEmail(){
    let user = firebase.auth().currentUser;
    if(user){
      return firebase.auth().currentUser.email;
    }else{
      return null;
    }
    
  }

  getProducts(){
    let prod = firebase.auth()
    console.log(firebase.auth())
  }
}
