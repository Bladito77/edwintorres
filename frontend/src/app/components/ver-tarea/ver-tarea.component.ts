import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tarea } from 'src/app/interface/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-ver-tarea',
  templateUrl: './ver-tarea.component.html',
  styleUrls: ['./ver-tarea.component.css']
})
export class VerTareaComponent  implements OnInit{
  id: number;
  tarea! : tarea;

  constructor (private _tareaService : TareaService,
    private aRoute : ActivatedRoute){ 
      this.id = Number(  this.aRoute.snapshot.paramMap.get('id'));
      
    }

  ngOnInit () : void{
    this.obtenerTarea()
  }
  
  obtenerTarea(){
    this._tareaService.getTareas(this.id).subscribe(data =>{
      this.tarea = data;
    })
  }

}
