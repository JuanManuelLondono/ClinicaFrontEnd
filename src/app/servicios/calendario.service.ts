import { Injectable } from '@angular/core';
import { ItemPQRSDTO } from '../modelo/ItemPQRSDTO';
import { CitaDTOMedico } from '../modelo/cita-dtomedico';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
  cita: CitaDTOMedico[];
  fecha: Date = new Date();
  constructor() {
    this.cita = [];
    this.cita.push({
      codigoCita: 1, nombrePaciente: 'Pepito',  fecha: new Date('2023, 10, 14'), motivo: 'Dolor de cabeza' 
    });
    this.cita.push({
        codigoCita: 2, nombrePaciente: 'Pedrito',  fecha: new Date('2023, 09, 29'), motivo: 'Dolor de panza'
    });
    this.cita.push({
        codigoCita: 3, nombrePaciente: 'Juanito',  fecha: new Date('2023, 11, 01'), motivo: 'Lo dejaron'
    });
    this.cita.push({
        codigoCita: 1, nombrePaciente: 'Freddy Mercury',  fecha: new Date('2023, 09, 07'), motivo: 'Dolor de ganganta'
    });
  }
  public listar(): CitaDTOMedico[] {
    return this.cita;
  }
  public obtener(codigoCita: number): CitaDTOMedico | undefined {
    return this.cita.find(cita => cita.codigoCita == codigoCita);
  }
//   public crear(pqrs: CitaDTOMedico) {
//     let codigo = this.cita.length + 1;
//     this.cita.push({
//       codigo: codigo, estado: 'ACTIVO', motivo: pqrs.motivo, fecha: new
//         Date().toISOString()
//     });
//   }
}