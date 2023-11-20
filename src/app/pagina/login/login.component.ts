import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { LoginDTO } from 'src/app/modelo/login-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  alerta!: Alerta;
  loginDTO: LoginDTO;

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) {
    this.loginDTO = new LoginDTO();
  }


  public login() {
    this.authService.login(this.loginDTO).subscribe({
      next: (data: { respuesta: { token: any; tipoUsuario: string; }; }) => {
        this.tokenService.login(data.respuesta.token);
  
        // Redirigir según el tipo de usuario
        if (data.respuesta.tipoUsuario === 'paciente') {
          this.router.navigate(['/inicio-paciente']);
        } else if (data.respuesta.tipoUsuario === 'medico') {
          this.router.navigate(['/gestion-medicos']);
        } else {
          // Otro tipo de usuario, puedes manejarlo según tus necesidades
        }
      },
      error: (error: { error: { respuesta: any; }; }) => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
    });
  }
}