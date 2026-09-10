import { Component, signal } from '@angular/core';
import { MuralRecadosComponent } from './mural-recados/mural-recados';

@Component({
  selector: 'app-root',
  imports: [MuralRecadosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projetoAC1');
}