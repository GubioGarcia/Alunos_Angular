import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuBarComponent } from "../../menu-bar/menu-bar.component";
import { Aluno } from '../../../models/Aluno';
import { AlunoService } from '../../../services/aluno.service';

@Component({
  selector: 'app-formulario',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nome = '';
  matricula = '';
  idade = 0;

  mensagem: string = '';
  tipoMensagem: 'sucesso' | 'erro' | '' = '';

  constructor(private alunoService: AlunoService) {}

  adicionarAluno() {
    if (!this.nome || this.nome.trim() === '') {
      this.exibirMensagem('Nome não pode estar vazio.', 'erro');
      return;
    }
    if (!this.matricula || this.matricula.trim() === '') {
      this.exibirMensagem('A matrícula é obrigatória.', 'erro');
      return;
    }
    if (this.idade < 1 || this.idade.toString().trim() === '') {
      this.exibirMensagem('A idade deve ser positiva.', 'erro');
      return;
    }

    const novoAluno = new Aluno(this.nome, this.matricula, this.idade);
    this.alunoService.adicionarAluno(novoAluno);
    this.exibirMensagem('Aluno adicionado com sucesso!', 'sucesso');
    this.limparFormulario();
  }

  exibirMensagem(mensagem: string, tipo: 'sucesso' | 'erro') {
    this.mensagem = mensagem;
    this.tipoMensagem = tipo;

    setTimeout(() => {
      this.mensagem = '';
      this.tipoMensagem = '';
    }, 3000);
  }

  apenasNumeros(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, '');
    this.idade = event.target.value;
  }

  limparFormulario() {
    this.nome = '';
    this.matricula = '';
    this.idade = 0;
  }
}
