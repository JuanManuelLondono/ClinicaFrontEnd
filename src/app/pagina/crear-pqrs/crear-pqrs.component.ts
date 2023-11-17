import { Component } from '@angular/core';
import { RegistroPQRSDTO } from 'src/app/modelo/RegistroPQRSDTO';
import { PqrsService } from 'src/app/servicios/pqrs.service';
@Component({
<<<<<<< HEAD
selector: 'app-crear-pqrs',
templateUrl: './crear-pqrs.component.html',
styleUrls: ['./crear-pqrs.component.css']
})
export class CrearPqrsComponent {
registroPQRSDTO: RegistroPQRSDTO;
constructor(private pqrsService: PqrsService) {
this.registroPQRSDTO = new RegistroPQRSDTO();
}
public crearPqrs(){
this.pqrsService.crear(this.registroPQRSDTO);
}
public seleccionar(codigoCita:number){
this.registroPQRSDTO.codigoCita = codigoCita;
}
=======
  selector: 'app-crear-pqrs',
  templateUrl: './crear-pqrs.component.html',
  styleUrls: ['./crear-pqrs.component.css']
})
export class CrearPqrsComponent {
  registroPQRSDTO: RegistroPQRSDTO;
  constructor(private pqrsService: PqrsService) {
    this.registroPQRSDTO = new RegistroPQRSDTO();
  }
  public crearPqrs() {
    this.pqrsService.crear(this.registroPQRSDTO);
  }
  public seleccionar(codigoCita: number) {
    this.registroPQRSDTO.codigoCita = codigoCita;
  }
>>>>>>> 37e5211664dfb977b35674dcba07c813f7d41f91
}