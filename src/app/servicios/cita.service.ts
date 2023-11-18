import { Injectable } from '@angular/core';
import { ItemCitaDTO } from '../modelo/itemCitaDTO';
import { RegistroCitaDTO } from '../modelo/RegistroCitaDTO';

@Injectable({
  providedIn: 'root'
})

export class CitaService {

  citas: ItemCitaDTO[];


  constructor() {
    this.citas = [];

    this.citas.push({
      codigoCita: 50, cedulaPaciente: '10953344', nombrePaciente:
        'Juan', nombreMedico: 'Hola', especialidad: 'Pediatra',
      estadoCita: 'Programada', fecha: '2023-11-30'
    })
  }

  public listar(): ItemCitaDTO[] {
    return this.citas;
  }


  public crear(citas: RegistroCitaDTO) {

    let codigo = this.citas.length + 1;


    this.citas.push({
      codigoCita: codigo, cedulaPaciente: '', nombrePaciente: "", nombreMedico: "",
      especialidad: "", estadoCita: "", fecha: new Date().toISOString()
    });
  }
}