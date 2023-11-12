import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { GestionMedicosComponent } from './pagina/gestion-medicos/gestion-medicos.component';
const routes: Routes = [
{ path: "inicio", component: InicioComponent },
{ path: "login", component: LoginComponent },
{ path: "registro", component: RegistroComponent },
{ path: "gestion-medicos", component: GestionMedicosComponent},
{ path: "**", pathMatch: "full", redirectTo: "inicio" }
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
