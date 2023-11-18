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


const Routes: Routes = [
{ path: "inicio", component: InicioComponent },
{ path: "login", component: LoginComponent },
{ path: "registro", component: RegistroComponent },
{ path: "gestion-medicos", component: GestionMedicosComponent},
{ path: "gestion-pqrs", component: GestionPqrsComponent },
{ path: "crear-pqrs", component: CrearPqrsComponent },
{ path: "calendario", component: CalendarioComponent},
{ path: "gestion-dia-libre", component: GestionDiaLibreComponent },
{ path: "atender-cita", component: AtenderCitaComponent},
{ path: "lista-atender-cita", component: ListaAtenderCitaComponent},
{ path: "gestion-citas", component: GestionCitasComponent} ,    
{ path: "**", pathMatch: "full", redirectTo: "inicio" }
];
@NgModule({
imports: [RouterModule.forRoot(Routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
