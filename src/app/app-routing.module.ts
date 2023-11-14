import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { GestionMedicosComponent } from './pagina/gestion-medicos/gestion-medicos.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';

const routes: Routes = [
{ path: "inicio", component: InicioComponent },
{ path: "login", component: LoginComponent },
{ path: "registro", component: RegistroComponent },
{ path: "gestion-medicos", component: GestionMedicosComponent},
{ path: "gestion-pqrs", component: GestionPqrsComponent },
{ path: "crear-pqrs", component: CrearPqrsComponent },
{ path: "**", pathMatch: "full", redirectTo: "inicio" }
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
