import { Component } from '@angular/core';
import { CitaDTOMedico } from 'src/app/modelo/cita-dtomedico';

import { CalendarioService } from 'src/app/servicios/calendario.service';
import { PqrsService } from 'src/app/servicios/pqrs.service';
import { ItemCitaDTO } from 'src/app/modelo/itemCitaDTO';
import { TokenService } from 'src/app/servicios/token.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { MedicoService } from 'src/app/servicios/medico.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  citasPendientes: ItemCitaDTO[];
  // citasRealizadas: ItemCitaDTO[];
  // citasCanceladas: ItemCitaDTO[];

  constructor(private tokenService: TokenService, private pacienteService: PacienteService,
    private medicoService: MedicoService) {

    this.citasPendientes = [];
    this.obtencionCitas();

    // this.citasRealizadas = [];
    // this.obtencionCitasRealizadas();

    // this.citasCanceladas = [];
    // this.obtencionCitasCanceladas();

  }


  public obtencionCitas() {
    let codigo = this.tokenService.getCodigo();
    this.medicoService.listarCitasPendientes(codigo).subscribe({
      next: data => {
        this.citasPendientes = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  // public obtencionCitasRealizadas() {
  //   let codigo = this.tokenService.getCodigo();
  //   this.medicoService.listarCitasRealizadas(codigo).subscribe({
  //     next: data => {
  //       this.citasRealizadas = data.respuesta;
  //     },
  //     error: error => {
  //       console.log(error);
  //     }
  //   });
  // }

  // public obtencionCitasCanceladas() {
  //   let codigo = this.tokenService.getCodigo();
  //   this.medicoService.listarCitasCanceladas(codigo).subscribe({
  //     next: data => {
  //       this.citasCanceladas = data.respuesta;
  //     },
  //     error: error => {
  //       console.log(error);
  //     }
  //   });
  // }



  
}
