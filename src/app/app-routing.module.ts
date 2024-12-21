
//esta funcionabilidad se crea en el capitulo 5
 import { NgModule } from '@angular/core'; // Importa el módulo NgModule desde Angular Core
import { RouterModule, Routes } from '@angular/router'; // Importa el módulo RouterModule y la interfaz Routes para la gestión de rutas

import { DashboardComponent } from './dashboard/dashboard.component'; // Importa el componente Dashboard creado en el capitulo 5 de igua forma 
import { HeroesComponent } from './heroes/heroes.component'; // Importa el componente Heroes
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // Importa el componente HeroDetail creado en el capitulo 3
import { HeroAddComponent } from './hero-add/hero-add.component';

const routes: Routes = [ // Define un arreglo de objetos Routes que especifica las rutas de la aplicación
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirige la ruta raíz ('/') a '/dashboard' como ruta predeterminada capitulo 5
  { path: 'dashboard', component: DashboardComponent }, // Asocia la ruta 'dashboard' con el componente DashboardComponentvv capitulo 5
  { path: 'detail/:id', component: HeroDetailComponent }, // Asocia la ruta 'detail/:id' con el componente HeroDetailComponent, donde ':id' es un parámetro dinámico capitulo 3
  { path: 'heroes', component: HeroesComponent }, // Asocia la ruta 'heroes' con el componente HeroesComponent capitulo 1
  { path: 'hero-add', component: HeroAddComponent }, // Asocia la ruta 'heroes-add' 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura las rutas de la aplicación utilizando el módulo RouterModule y la lista de rutas definida
  exports: [RouterModule] // Exporta el módulo RouterModule para que pueda ser utilizado por otros componentes o módulos
})
export class AppRoutingModule {} // Define el módulo de enrutamiento llamado 'AppRoutingModule'
