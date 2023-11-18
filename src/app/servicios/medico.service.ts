import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private clinicaURL = "http://localhost:8082/api/clinica";
  constructor(private http: HttpClient) { }

  public listarCitasPendientes(codigoMedico: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/listar-citas-pendientes`);
  }
   
}
