import { Injectable } from '@angular/core';

export interface Inscricao {
    id: number;
    nome: string;
    email: string;
    oficina: string;
    situacao: 'aguardando' | 'confirmado';
}

@Injectable({ providedIn: 'root' })
export class InscricaoService {
    private participante: Inscricao[] = [];
    private novo = 1;
    listar(): Inscricao[] {
        return this.participante;
    }
    adicionar(nome: string, email: string, oficina: string) {
        this.participante.push({
            id: this.novo++,
            nome: nome,
            email: email,
            oficina: oficina,
            situacao: 'aguardando'
        });
    }
    remover(id: number) {
        this.participante = this.participante.filter(part => part.id !== id);
    }
    confirmarInscricao(id: number) {
        const novo2 = this.participante.find(part => part.id === id);
        if (novo2) {
            novo2.situacao = 'confirmado';
        }
    }
}