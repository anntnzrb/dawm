import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://productos-b2f04-default-rtdb.firebaseio.com/collection.json');
  }
}
