import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  public VerifySession() : boolean{
    let user = firebase.auth().currentUser;
    if(user){
      return true;
    }else{
      return false;
    }
  }
}
