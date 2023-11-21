import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { RegistroPQRSDTO } from '../modelo/RegistroPQRSDTO';
import { ItemPacienteDTO } from '../modelo/item-paciente-dto';
import { RegistroCitaDTO } from '../modelo/RegistroCitaDTO';
import { CitaDTOPaciente } from '../modelo/cita-dtopaciente';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private userUrl = "http://localhost:8083/api/pacientes";
  constructor(private http: HttpClient) { }
  public verDetallePaciente(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/detalle/${codigo}`);
  }
  public eliminarCuenta(codigo: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar/${codigo}`);
  }
  public editarPerfil(pacienteDTO: ItemPacienteDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/editar-perfil`, pacienteDTO);
  }
  public crearPQRS(registroPQRSDTO: RegistroPQRSDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/crear-pqrs`, registroPQRSDTO);
  }
  public listarPQRSPaciente(codigoPaciente: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-pqrs/${codigoPaciente}`);
  }
  public agendarCita(registroCitaDTO: RegistroCitaDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/agendar-cita`, registroCitaDTO);
  }
  public verDetallePQRS(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/detalle-pqrs/${codigo}`);
  }

  public filtrarCitasPorFecha(fecha: string): Observable<CitaDTOPaciente[]> {
    return this.http.get<CitaDTOPaciente[]>(`${this.userUrl}/filtrar-citas-por-fecha/${fecha}`);
  }

  public filtrarCitasPorMedico(nombreMedico: string): Observable<CitaDTOPaciente[]> {
    return this.http.get<CitaDTOPaciente[]>(`${this.userUrl}/filtrar-citas-por-medico/${nombreMedico}`);
  }

}