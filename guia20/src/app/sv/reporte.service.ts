import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://productos-b2f04-default-rtdb.firebaseio.com/collection.json');
  }

  getOneProduct(producto: string) {
    return this.http.get(
      `https://productos-b2f04-default-rtdb.firebaseio.com/collection.json?orderBy="productoNombre"&equalTo="${producto}"`
    );
  }
}
