import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { GestionMedicosComponent } from './pagina/gestion-medicos/gestion-medicos.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { CalendarioComponent } from './pagina/calendario/calendario.component';
import { GestionDiaLibreComponent } from './pagina/gestion-dia-libre/gestion-dia-libre.component';
import { AtenderCitaComponent } from './pagina/atender-cita/atender-cita.component';
import { ListaAtenderCitaComponent } from './pagina/lista-atender-cita/lista-atender-cita.component';
import { GestionCitasComponent } from './pagina/gestion-citas/gestion-citas.component';
import { InicioPacienteComponent } from './pagina/inicio-paciente/inicio-paciente.component';
import { ModuloUsuarioComponent } from './pagina/modulo-usuario/modulo-usuario.component';
import { EditarInfoComponent } from './pagina/editar-info/editar-info.component';
import { InfoCitaComponent } from './pagina/info-cita/info-cita.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { OlvidoContraseniaComponent } from './pagina/olvido-contrasenia/olvido-contrasenia.component';
import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';


const Routes: Routes = [
{ path: "inicio", component: InicioComponent },
{ path: "login", component: LoginComponent, canActivate: [LoginGuard] },
{ path: "registro", component: RegistroComponent, canActivate: [LoginGuard] },
{ path: "gestion-medicos", component: GestionMedicosComponent},
{ path: "gestion-pqrs", component: GestionPqrsComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["paciente"] } },
{ path: "crear-pqrs", component: CrearPqrsComponent },
{ path: "detalle-pqrs", component: DetallePqrsComponent},
{ path: "calendario", component: CalendarioComponent},
{ path: "gestion-dia-libre", component: GestionDiaLibreComponent },
{ path: "atender-cita", component: AtenderCitaComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["medico"] }},
{ path: "lista-atender-cita", component: ListaAtenderCitaComponent},
{ path: "gestion-citas", component: GestionCitasComponent} ,    
{ path: "inicio-paciente", component: InicioPacienteComponent},
{ path: "modulo-usuario", component: ModuloUsuarioComponent},
{ path: "editar-info", component: EditarInfoComponent},
{ path: "info-citas", component: InfoCitaComponent},
{ path: "olvido-contrasenia", component: OlvidoContraseniaComponent},
{ path: "**", pathMatch: "full", redirectTo: "inicio" }
];
@NgModule({
imports: [RouterModule.forRoot(Routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
