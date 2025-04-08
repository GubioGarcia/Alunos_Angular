import { Injectable } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: Aluno[] = [];

  constructor() {}

  getAlunos(): Aluno[] {
    return [...this.alunos];
  }

  adicionarAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
  }

  limparAlunos(): void {
    this.alunos = [];
  }
}
