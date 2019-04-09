import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  ref = firebase.database().ref('ads/');
  ads = [];
  constructor() {
    this.ref.on('value', s=>{
        this.ads = [];
        this.ads = firebaseToArray(s)
    })
   }
}


export const firebaseToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapShot=> {
    let item = childSnapShot.val();
    item.key = childSnapShot.key;
    returnArr.push(item);
  });

  return returnArr;
}
