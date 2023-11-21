
import { Observable } from 'rxjs';
import { ItemMedicoDTO } from 'src/app/modelo/item-medico-dto';
import { RegistroCitaDTO } from 'src/app/modelo/RegistroCitaDTO';
import { Alerta } from 'src/app/modelo/alerta';
import { MensajeDTO } from 'src/app/modelo/mensaje-dto';
import { CitaService } from 'src/app/servicios/cita.service';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent implements OnInit {
    
  constructor(private clinicaService: ClinicaService, private citaService: CitaService,
    private pacienteService: PacienteService, private tokenService: TokenService,private formBuilder: FormBuilder) {
    this.registroCitaDTO = new RegistroCitaDTO();

    this.especialidades = [];
    this.cargarEspecialidades();

    this.medicoPorEspecialidad = [];

    this.cargarDatos();

  }

  appointmentForm: FormGroup = new FormGroup({
    // ... define los campos del formulario aquí
  });
  alerta!: Alerta;

  registroCitaDTO: RegistroCitaDTO;
  especialidades: String[]
  medicoPorEspecialidad: ItemMedicoDTO[];

  especialidad: string = '';




  public cargarDatos(){
    let codigo = this.tokenService.getCodigo();
    this.registroCitaDTO.codigoPaciente = codigo;



  }

  public seleccionar(codigoMedico: number) {
    this.registroCitaDTO.codigoMedico = codigoMedico;
  }

  private cargarEspecialidades() {
    this.clinicaService.listarEspecialidades().subscribe({
      next: data => {
        console.log(this.especialidades);
        this.especialidades = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  /*private listarMedicoPorEspecialidad() {
    this.clinicaService.listarMedicoPorEspecialidad(this.especialidad).subscribe({
      next: data => {
        console.log(this.especialidades);
        this.medicoPorEspecialidad = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  } */

  // medicoPorEspecialidad: any[];

  private listarMedicoPorEspecialidad(especialidad: string) {
    this.clinicaService.listarMedicoPorEspecialidad(especialidad).subscribe({
      next: data => {
        this.medicoPorEspecialidad = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  public listarMedicos(event: any) {
    this.listarMedicoPorEspecialidad(event.target.value);
  }


  public agendarCita() {
    this.pacienteService.agendarCita(this.registroCitaDTO).subscribe({
      next: data => {
        alert("Registro Exitoso")
        console.log(data);
      },
      error: error => {
        this.alerta = { tipo: "danger", mensaje: error.error.respuesta }
        console.log(error);
      }
    });
  }


  ngOnInit() {
    this.appointmentForm = this.formBuilder.group({
      name: ['', Validators], // Validador de campo requerido
      email: ['', Validators], // Validador de campo requerido y formato de correo electrónico
      phone: ['', Validators], // Validador de campo requerido
      date: ['', Validators], // Validador de campo requerido
      medico: ['', Validators], // Validador de campo requerido
      message: ['']
    });
  }
  

  onSubmit() {
    if (this.appointmentForm.valid) {
      const formValues = this.appointmentForm.value;
      
      // Asigna los valores del formulario al objeto registroCitaDTO
      this.registroCitaDTO.fechaCita = formValues.date;
      this.registroCitaDTO.motivo = formValues.medico; // Asegúrate de que esto sea correcto
      this.registroCitaDTO.codigoPaciente = this.tokenService.getCodigo();
      this.registroCitaDTO.codigoMedico = formValues.codigoMedico; // Asegúrate de que esto sea correcto
  
      // Llama al método agendarCita con el objeto actualizado
      this.agendarCita();
    } else {
      console.log('El formulario es inválido. Por favor, complete los campos requeridos.');
    }
  }


  
  
}