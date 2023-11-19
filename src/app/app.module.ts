import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { GestionMedicosComponent } from './pagina/gestion-medicos/gestion-medicos.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertaComponent } from './pagina/alerta/alerta.component';
import { CalendarioComponent } from './pagina/calendario/calendario.component';
import { GestionDiaLibreComponent } from './pagina/gestion-dia-libre/gestion-dia-libre.component';
import { AtenderCitaComponent } from './pagina/atender-cita/atender-cita.component';
import { ListaAtenderCitaComponent } from './pagina/lista-atender-cita/lista-atender-cita.component';
import { AgendarCitaComponent } from './pagina/agendar-cita/agendar-cita.component';
import { GestionCitasComponent } from './pagina/gestion-citas/gestion-citas.component';
import { InicioPacienteComponent } from './pagina/inicio-paciente/inicio-paciente.component';
import { ModuloUsuarioComponent } from './pagina/modulo-usuario/modulo-usuario.component';
import { EditarInfoComponent } from './pagina/editar-info/editar-info.component';
import { InfoCitaComponent } from './pagina/info-cita/info-cita.component';
import { OlvidoContraseniaComponent } from './pagina/olvido-contrasenia/olvido-contrasenia.component';

@NgModule({
declarations: [
AppComponent,
InicioComponent,
LoginComponent,
RegistroComponent,
GestionMedicosComponent,
GestionPqrsComponent,
CrearPqrsComponent,
DetallePqrsComponent,
AlertaComponent,
CalendarioComponent,
GestionDiaLibreComponent,
AtenderCitaComponent,
ListaAtenderCitaComponent,
AgendarCitaComponent,
GestionCitasComponent,
InicioPacienteComponent,
ModuloUsuarioComponent,
EditarInfoComponent,
InfoCitaComponent,
OlvidoContraseniaComponent,
],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule,
HttpClientModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
