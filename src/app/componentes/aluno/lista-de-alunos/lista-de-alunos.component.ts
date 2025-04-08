import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormularioComponent } from "../formulario/formulario.component";
import { AlunoService } from '../../../services/aluno.service';
import { Aluno } from '../../../models/Aluno';

@Component({
  selector: 'app-lista-de-alunos',
  imports: [
    CommonModule,
    TableModule
  ],
  templateUrl: './lista-de-alunos.component.html',
  styleUrl: './lista-de-alunos.component.css'
})
export class ListaDeAlunosComponent {
  alunos: Aluno[] = [];

  constructor(
    private alunoService: AlunoService
  ) {}

  ngOnInit() {
    this.alunos = this.alunoService.getAlunos();
  }
}
