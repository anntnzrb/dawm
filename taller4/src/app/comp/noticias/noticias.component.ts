import { Component, OnInit } from '@angular/core';
import { FuenteService } from 'src/app/sv/fuente.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  news: any = [];

  constructor(private fuenteService: FuenteService) { }

  ngOnInit(): void {
    this.fuenteService.getData()
      .subscribe(data => {
        for (const p in data) { this.news.push((data as any)[p]); }
      });
  }
}
