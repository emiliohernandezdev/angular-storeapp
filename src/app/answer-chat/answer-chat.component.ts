import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-answer-chat',
  templateUrl: './answer-chat.component.html',
  styleUrls: ['./answer-chat.component.css']
})
export class AnswerChatComponent implements OnInit {
  ref = firebase.database().ref('messages').child('messages') 
  constructor() { }

  ngOnInit() {
    
  }

}
