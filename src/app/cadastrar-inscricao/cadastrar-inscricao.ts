import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../inscricao-service';

@Component({
  selector: 'app-cadastrar-inscricao',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-inscricao.html'
})

export class CadastrarInscricao {
  nome = '';
  email = '';
  oficina = '';

  constructor(private insc: InscricaoService) { }

  cadastrar() {
    if (this.nome === '') return;
    this.insc.adicionar(this.nome, this.email, this.oficina);
    this.nome = '';
    this.email = '';
    this.oficina = '';
  }
}