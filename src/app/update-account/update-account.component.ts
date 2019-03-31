import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  email:string = firebase.auth().currentUser.email;
  name:string = firebase.auth().currentUser.displayName;
  phone:string = firebase.auth().currentUser.phoneNumber;
  constructor() { }

  ngOnInit() {
  }

  Update(){
    firebase.auth().currentUser.updateProfile({displayName: this.name, photoURL: this.phone})
  }

}
