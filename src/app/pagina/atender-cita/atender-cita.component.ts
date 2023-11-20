// atender-cita.component.ts

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AtencionCitaDTOMedico } from 'src/app/modelo/atencion-cita-dtomedico';
import { Alerta } from 'src/app/modelo/alerta';
import { MedicoService } from 'src/app/servicios/medico.service';

@Component({
  selector: 'app-atender-cita',
  templateUrl: './atender-cita.component.html',
  styleUrls: ['./atender-cita.component.css']
})
export class AtenderCitaComponent {

  alerta!: Alerta;
  atencionCitaDTOMedico: AtencionCitaDTOMedico;

  constructor(private medicoService: MedicoService, private route: ActivatedRoute) {
    this.atencionCitaDTOMedico = new AtencionCitaDTOMedico();
  }

  public atenderCita(form: NgForm) {
    const codigoCita = this.route.snapshot.params['codigoCita'];
    this.atencionCitaDTOMedico.codigoCita = codigoCita;

    this.medicoService.atenderCita()
      .subscribe({
        next: data => {
          // Manejar la respuesta del servicio si es necesario
          alert("Atención de cita exitosa");
          console.log(data);
        },
        error: error => {
          this.alerta = { tipo: "danger", mensaje: error.error.respuesta };
          console.log(error);
        }
      });
  }
}
