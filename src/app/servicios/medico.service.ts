import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { AgendarDiaLibreDTO } from '../modelo/agendar-dia-libre-dto';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private userURL = "http://localhost:8083/api/medico";
  constructor(private http: HttpClient) { }

  public listarCitasPendientes(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userURL}/listar-citas-pendientes`)

  }
  public listarCitasRealizadas(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userURL}/listar-citas-realizadas`);

  }

  public atenderCita(): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.userURL}/atender-cita`);
  }

  public agendarDiaLibre(agendarDiaLibreDTO: AgendarDiaLibreDTO): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userURL}/gestion-dia-libre`);
  }


}
