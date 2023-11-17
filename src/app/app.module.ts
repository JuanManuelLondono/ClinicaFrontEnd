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
<<<<<<< HEAD
import { OlvidoContraseniaComponent } from './pagina/olvido-contrasenia/olvido-contrasenia.component';
import { NotificacionPqrsComponent } from './pagina/notificacion-pqrs/notificacion-pqrs.component';
import { InfoCitaComponent } from './pagina/info-cita/info-cita.component';
import { GestionCitaComponent } from './pagina/gestion-cita/gestion-cita.component';
=======
import { HttpClientModule } from '@angular/common/http';
import { AlertaComponent } from './pagina/alerta/alerta.component';
import { CalendarioComponent } from './pagina/calendario/calendario.component';
>>>>>>> 37e5211664dfb977b35674dcba07c813f7d41f91
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
<<<<<<< HEAD
OlvidoContraseniaComponent,
NotificacionPqrsComponent,
InfoCitaComponent,
GestionCitaComponent
=======
AlertaComponent,
CalendarioComponent,
>>>>>>> 37e5211664dfb977b35674dcba07c813f7d41f91
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
