import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http' 
import {  map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL : string = 'https://storeappemiliohernandez.firebaseio.com/'

  constructor(private http: HttpClient ) { }

  getProducts() {
    return this.http.get(`${this.API_URL}products/.json`).pipe(map (res => res));
  }

}
