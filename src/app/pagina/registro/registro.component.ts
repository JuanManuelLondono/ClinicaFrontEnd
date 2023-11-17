import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/RegistroPacienteDTO';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent {


  archivos!: FileList;
  registroPacienteDTO: RegistroPacienteDTO;
  ciudades: string[];
  eps: string[];
  tipoSangre: string[];

  constructor() {
    this.eps = [];
    this.ciudades = [];
    this.tipoSangre = [];

    this.cargarCiudades();
    this.cargarEPS();
    this.cargarTipoSangre();
    this.registroPacienteDTO = new RegistroPacienteDTO();
  }

  public registrar() {
    if (this.archivos != null && this.archivos.length > 0) {
      console.log(this.registroPacienteDTO);
    } else {
      console.log("Debe cargar una foto");
    }
  }

  public sonIguales(): boolean {
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
  }


  private cargarCiudades() {
    this.ciudades.push("Armenia");
    this.ciudades.push("Calarcá");
    this.ciudades.push("Pereira");
    this.ciudades.push("Manizales");
    this.ciudades.push("Medellín");
  }

  private cargarEPS() {

    this.eps.push("NUEVA EPS");
    this.eps.push("SURA");
    this.eps.push("SANITAS");

  }

  private cargarTipoSangre(){

    this.tipoSangre.push("O+");
    this.tipoSangre.push("O-");
    this.tipoSangre.push("A+");
    this.tipoSangre.push("A-");
    this.tipoSangre.push("B+");
    this.tipoSangre.push("B-");
    this.tipoSangre.push("AB+");
    this.tipoSangre.push("AB-");
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      console.log(files);
    }
  }

}

