import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyDs-UekALheW6tHX9zIOKSlC7N6vdT0NL0",
  authDomain: "storeappemiliohernandez.firebaseapp.com",
  databaseURL: "https://storeappemiliohernandez.firebaseio.com",
  projectId: "storeappemiliohernandez",
  storageBucket: "storeappemiliohernandez.appspot.com",
  messagingSenderId: "403195387808"
}


@Injectable({
  providedIn: 'root'
})
export class FirebaseDriverService {

  constructor() { }

  InitApp() : Promise<any>{
    return new Promise((resolve, reject) => {
      if(firebase.apps.length < 1){
        firebase.initializeApp(firebaseConfig)
        resolve(console.log('Inicio'))
      }else{
        reject(console.log('Error de la app'))
      }
    })
  }
}
