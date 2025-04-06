import { Component, Renderer2 } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-bar',
  imports: [
    MenubarModule,
    SelectButtonModule,
    FormsModule
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  items: MenuItem[] | undefined;
  temas: any[] | undefined;
  temaSelecionado: string | undefined;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.items = [
        {
            label: 'Alunos',
            icon: 'pi pi-user',
            routerLink: ['/formulario']
        },
        {
          label: 'Informações do projeo',
          icon: 'pi pi-user',
          routerLink: ['/info']
        }
    ];
  }
}
