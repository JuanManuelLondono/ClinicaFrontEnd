import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroPacienteDTO } from '../modelo/RegistroPacienteDTO';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { LoginDTO } from '../modelo/login-dto';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authURL = "http://localhost:8082/api/pacientes";
  constructor(private http: HttpClient) { 

  }

  public registrarPaciente(paciente: RegistroPacienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/registro`, paciente);
  }

  public login(loginDTO:LoginDTO):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.authURL}/login`, loginDTO);
    }


}