import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import { ShowResultComponent } from '../show-result/show-result.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }
  filter:string="";
  results = [];
  ngOnInit() {
    this.filter = this.data.filter;
  }

  ShowResult(result){
    this.dialog.open(ShowResultComponent, {
      width: '500px',
      height: '500px',
      data: {item: result}
    })
  }

}
