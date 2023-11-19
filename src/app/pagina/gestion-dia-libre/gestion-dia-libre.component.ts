import { Component } from '@angular/core';
import { AgendarDiaLibreDTO } from 'src/app/modelo/agendar-dia-libre-dto';
import { Alerta } from 'src/app/modelo/alerta';
import { MedicoService } from 'src/app/servicios/medico.service'
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-gestion-dia-libre',
  templateUrl: './gestion-dia-libre.component.html',
  styleUrls: ['./gestion-dia-libre.component.css']
})
export class GestionDiaLibreComponent {

  agendarDiaLibreDTO: AgendarDiaLibreDTO;
  alerta!: Alerta;

  constructor(private medicoService : MedicoService, private tokenService: TokenService){
    this.agendarDiaLibreDTO = new AgendarDiaLibreDTO;
  }

  public agendarDiaLibre() {
    let codigo = this.tokenService.getCodigo();

    this.agendarDiaLibreDTO.codigoMedico = codigo;

    
    this.medicoService.agendarDiaLibre(this.agendarDiaLibreDTO).subscribe({
        next: data => {
          alert("Dia agendado con exito")
          this.alerta = { tipo: "success", mensaje: data.respuesta }
        },
        error: data => {
          this.alerta = { tipo: "danger", mensaje: data.error.respuesta }
        }
      })

  }

}
