import { Injectable } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  constructor() { }

  private alunosSubject = new BehaviorSubject<Aluno[]>([]);
  alunos$ = this.alunosSubject.asObservable();

  adicionarAluno(aluno: Aluno) {
    const listaAtual = this.alunosSubject.getValue();
    this.alunosSubject.next([...listaAtual, aluno]);
  }

  limparAlunos() {
    this.alunosSubject.next([]);
  }
}
