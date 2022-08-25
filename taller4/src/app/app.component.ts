import { Component } from '@angular/core';
import { FuenteService } from './sv/fuente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-angular';

  constructor(private fuenteService: FuenteService) {}
}
