import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Recado {
  id: number;
  recado: string;
  dono: string;
}

@Component({
  selector: 'app-mural-recados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mural-recados.html',
  styleUrl: './mural-recados.css'
})
export class MuralRecadosComponent {
  recados: Recado[] = [
    { id: 1, recado: 'Vaga disponível para Analista de Software Junior', dono: 'Fernando Dias' },
    { id: 2, recado: 'Transporte escolar para segundo semestre, período noturno com vagas disponíveis', dono: 'Vans Cabral' },
    { id: 3, recado: 'Aulas suspensas para sexta-feira - 11/09', dono: 'Eliney Sabino' },
    { id: 4, recado: 'Republica Feminina para Facens - Locação Semestral', dono: 'Mariana Fagundes' },
    { id: 5, recado: 'Luta Beneficente - Fight against hungry', dono: 'LINCE Facens' }
  ];

  recadoEscolhido: Recado | null = null;
  novoRecadoConteudo: string = '';
  recadoLido: boolean = false;
  curtidas: number = 0;

  private proximoId: number = 5;
  escolherRecado(recado: Recado): void {
    this.recadoEscolhido = recado;
    this.recadoLido = false;
    this.curtidas = 0;
  }

  publicarRecado(): void {
    const recado = this.novoRecadoConteudo.trim();
    if (!recado) {
      return;
    }
    const novo: Recado = {
      id: this.proximoId++,
      recado,
      dono: 'Você'
    };
    this.recados.push(novo);
    this.novoRecadoConteudo = '';
  }

  alternarLido(): void {
    this.recadoLido = !this.recadoLido;
  }

  curtir(): void {
    this.curtidas++;
  }
}
