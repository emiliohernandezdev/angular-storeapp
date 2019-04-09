import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getEmail() : string {
    let user = firebase.auth().currentUser;
    if(user){
      return user.email;
    }else{
      return null;
    }
  }

}
