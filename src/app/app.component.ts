import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelaCrudComponent } from "./componente/telaCrud-template/telaCrud.component";
import { telaGrupo } from './feature/grupo/TelaGrupo';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TelaCrudComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  grupoTela = telaGrupo;

  formControl = new FormControl();

  constructor(){
    this.formControl.setValue("Grupo 1");
  }
}
