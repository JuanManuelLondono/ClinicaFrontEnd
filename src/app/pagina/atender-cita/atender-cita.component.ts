// atender-cita.component.ts

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private medicoService: MedicoService, private route: ActivatedRoute, private router:Router) {
    this.atencionCitaDTOMedico = new AtencionCitaDTOMedico();
  }

  public atenderCita() {
    const codigoCita = this.route.snapshot.params['codigoCita'];
    console.log(codigoCita);
    this.atencionCitaDTOMedico.codigoCita = codigoCita;

    this.medicoService.atenderCita( this.atencionCitaDTOMedico)
      .subscribe({
        next: data => {
          // Manejar la respuesta del servicio si es necesario
          alert("Atención de cita exitosa");
          this.router.navigate(["/calendario"]).then(() => {
            window.location.reload();
          });

        },
        error: error => {
          this.alerta = { tipo: "danger", mensaje: error.error.respuesta };
          console.log(error);
        }
      });
  }
}
