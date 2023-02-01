import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { AgregarEditarComponent } from './components/agregar-editar/agregar-editar.component';
import { ListarTareaComponent } from './components/listar-tarea/listar-tarea.component';
import { VerTareaComponent } from './components/ver-tarea/ver-tarea.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';


const routes: Routes = [
  {path:'',redirectTo:'listartarea',pathMatch:'full'},
  {path:'listartarea',component:ListarTareaComponent},
  {path:'agregartarea',component:AgregarEditarComponent},
  {path:'vertarea/:id',component:VerTareaComponent},
  {path:'editartarea/:id',component:AgregarEditarComponent},
  {path:'**',redirectTo:'listartarea',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
