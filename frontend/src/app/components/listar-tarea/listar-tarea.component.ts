
import {tarea} from 'src/app/interface/tarea';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { timeout } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TareaService } from 'src/app/services/tarea.service';
import { ThisReceiver } from '@angular/compiler';


// const listao: tarea[] = [
//   {user: 'Santiago Giraldo', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 1 },
//   {user: 'Santiago Giraldo', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 2 },
//   {user: 'Santiago Giraldo', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 3 },
//   {user: 'Santiago Giraldo', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 4 },
//   {user: 'Santiago Giraldo', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 5 },
//   {user: 'Santiago Giraldo', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 6 },
//   {user: 'Santiago Giraldo', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 7 },
//   {user: 'Santiago Giraldo', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 8 },
//   {user: 'Santiago Giraldo', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 9 },
//   {user: 'Santiago Giraldo', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 10 },
//   {user: 'Santiago Giraldo', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 11 },
//   {user: 'Santiago Giraldo', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 12 },
//   {user: 'Santiago Giraldo', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 13 },
//   {user: 'Santiago Giraldo', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 14 },
//   {user: 'Santiago Giraldo', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 15 }

//   // {user: 'Edwin Torres', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 6 ,acciones:null},
//   // {user: 'Sofia Corredor', linea: 'CREDIVALORES: CV Desarrollo',concepto:"Desarrollo defectos Rq seguro", horas: 2 ,acciones:null}
  
// ];

@Component({
  selector: 'app-listar-tarea',
  templateUrl: './listar-tarea.component.html',
  styleUrls: ['./listar-tarea.component.css'],
  
})
export class ListarTareaComponent implements OnInit,AfterViewInit{
  displayedColumns: string[] = ['user', 'linea', 'concepto', 'horas' , 'acciones'];
  dataSource = new MatTableDataSource<tarea>();
  loading: boolean = false;

  //dataSource = ELEMENT_DATA;  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private _snackBar: MatSnackBar, private _tareaService:TareaService){
    
  }
  ngOnInit(): void {
    this.obtenerTarea();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    if (this.dataSource.data.length > 0 ){ 
      this.paginator._intl.itemsPerPageLabel ="Items por pagina"  
    }
    
  }

  obtenerTarea(){
    this.loading = true;
    this._tareaService.getTarea().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
      //console.log(data[0].linea);
    },error => {
      this.loading =false;
      alert("error se cayo el backend")
    })
  }
  eliminarTarea (id: number) {
    this.loading = true;

    this._tareaService.deleteTarea(id).subscribe(() => {
        this.mensajeExito();
        this.loading=false;
        this.obtenerTarea();
    });
  }
    mensajeExito( ) {
       this._snackBar.open(' la tarea fue eliminada con exito','',{
         duration: 4000,
         horizontalPosition: 'right',
       });
  }
}


