import { Component } from '@angular/core';
import { CitaDTOMedico } from 'src/app/modelo/cita-dtomedico';

import { CalendarioService } from 'src/app/servicios/calendario.service';
import { PqrsService } from 'src/app/servicios/pqrs.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {

  citaDTOMedico: CitaDTOMedico;

  constructor(private CalendarioService: CalendarioService) {
    this.citaDTOMedico = new CitaDTOMedico;
  }

  public seleccionar(codigoCita: number) {
    this.citaDTOMedico.codigoCita = codigoCita;
  }

  public listar(codigoCita: number) {
    this.citaDTOMedico.codigoCita = codigoCita;
  }
  // public obtener(codigoCita: number): CitaDTOMedico | undefined {
  //   return this.citaDTOMedico.find(this.citaDTOMedico => this.citaDTOMedico.codigoCita == codigoCita);
  // }
}
