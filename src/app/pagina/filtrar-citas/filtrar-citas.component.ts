import { Component } from '@angular/core';
import { PacienteService } from 'src/app/servicios/paciente.service';  // Reemplaza 'ruta-al-servicio' con la ruta correcta

@Component({
  selector: 'app-filtrar-citas',
  templateUrl: './filtrar-citas.component.html',
  styleUrls: ['./filtrar-citas.component.css']
})
export class FiltrarCitasComponent {
  nombreMedico: string = '';
  fechaCita: string = '';
  citas: any[] = [];

  constructor(private pacienteService: PacienteService) {}

  filtrarCitasPorMedico() {
    this.pacienteService.filtrarCitasPorMedico(this.nombreMedico)
      .subscribe(data => this.citas = data);
  }

  filtrarCitasPorFecha() {
    this.pacienteService.filtrarCitasPorFecha(this.fechaCita)
      .subscribe(data => this.citas = data);
  }
}