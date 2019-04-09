import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  image = firebase.auth().currentUser.photoURL;
  name = firebase.auth().currentUser.displayName;
  constructor() { }

  ngOnInit() {

  }

}
