import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
//componentes//
import {MatPaginatorModule} from '@angular/material/paginator';
import { AgregarEditarComponent } from './components/agregar-editar/agregar-editar.component';
import { ListarTareaComponent } from './components/listar-tarea/listar-tarea.component';
import { VerTareaComponent } from './components/ver-tarea/ver-tarea.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//angular material
//migrado a shared

//modulos
import  {SharedModule } from './shared/shared.module'


@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarComponent,
    ListarTareaComponent,
    VerTareaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatPaginatorModule
    
  ],
  entryComponents: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

