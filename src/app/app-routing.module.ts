import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { PadreCochesComponent } from './components/padre-coches/padre-coches.component';
import { HijoCocheComponent } from './components/hijo-coche/hijo-coche.component';
import { PadreDeportesComponent } from './components/padre-deportes/padre-deportes.component';

const routes: Routes = [
  {path:"menu", component: ListaProductosComponent},
  {path:"padrecoches", component: PadreCochesComponent},
  {path:"hijocoche", component: HijoCocheComponent},
  {path:"padredeportes", component: PadreDeportesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
