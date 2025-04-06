import { Routes } from '@angular/router';
import { InfoProjetoComponent } from './componentes/info-projeto/info-projeto.component';
import { ListaDeAlunosComponent } from './componentes/aluno/lista-de-alunos/lista-de-alunos.component';

export const routes: Routes = [
  {path: '', redirectTo: '/formulario', pathMatch: 'full'},
  {path: 'info', component: InfoProjetoComponent},
  {path: 'formulario', component: ListaDeAlunosComponent}
];
