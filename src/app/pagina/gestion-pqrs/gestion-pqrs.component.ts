import { Component } from '@angular/core';
import { ItemPQRSDTO } from 'src/app/modelo/ItemPQRSDTO';
<<<<<<< HEAD
import { PqrsService } from 'src/app/servicios/pqrs.service';
@Component({
selector: 'app-gestion-pqrs',
templateUrl: './gestion-pqrs.component.html',
styleUrls: ['./gestion-pqrs.component.css']
})
export class GestionPqrsComponent {
pqrs: ItemPQRSDTO[];
constructor( private pqrsService: PqrsService ) {
this.pqrs = pqrsService.listar();
}
=======
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-gestion-pqrs',
  templateUrl: './gestion-pqrs.component.html',
  styleUrls: ['./gestion-pqrs.component.css']
})
export class GestionPqrsComponent {
  pqrs: ItemPQRSDTO[];
  constructor(private pacienteService: PacienteService, private tokenService: TokenService) {
    this.pqrs = [];
    this.obtenerPqrs();
  }
  public obtenerPqrs() {
    let codigo = this.tokenService.getCodigo();
    this.pacienteService.listarPQRSPaciente(codigo).subscribe({
      next: data => {
        this.pqrs = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }
>>>>>>> 37e5211664dfb977b35674dcba07c813f7d41f91
}