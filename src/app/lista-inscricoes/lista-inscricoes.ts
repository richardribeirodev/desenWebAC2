import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../inscricao-service';

@Component({
  selector: 'app-lista-inscricoes',
  imports: [RouterLink],
  templateUrl: './lista-inscricoes.html',
  styleUrl: './lista-inscricoes.css'
})

export class ListaInscricoes {
  constructor(public insc: InscricaoService) { }
  get lista() { return this.insc.listar(); }
  get tam() { return this.lista.length; }
  get filtrados() { return this.lista.filter(part => part.situacao === 'confirmado').length; }
  get final() { return this.tam - this.filtrados; }
}