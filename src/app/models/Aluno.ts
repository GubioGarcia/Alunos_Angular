export class Aluno {
  public nome: string;
  public matricula: string;
  public idade: number;

  constructor(nome: string, matricula: string, idade: number) {
    this.nome = nome;
    this.matricula = matricula;
    this.idade = idade;
  }
}
