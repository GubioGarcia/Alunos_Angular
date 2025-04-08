import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonIcon, ButtonModule } from 'primeng/button';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ButtonModule, MenuBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Alunos_Angular';
}
