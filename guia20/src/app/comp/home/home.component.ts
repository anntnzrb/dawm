import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ReporteService } from 'src/app/sv/reporte.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos: any = [];

  constructor(private reporteService: ReporteService, private route: Router) { }

  ngOnInit(): void {
    this.reporteService
      .getProducts()
      .subscribe(data => this.productos = data);
  }

  goToMovie(id: string) {
    this.route.navigate(['/movie', id]);
  }

  verTodo(producto: any) {
    this.reporteService
      .getOneProduct(producto)
      .subscribe(data => {
        this.productos = [];
        for (let p in data) {
          this.productos.push((data as any)[p])
        }
      });
  }

  reset() {
    this.ngOnInit();
  }
}
