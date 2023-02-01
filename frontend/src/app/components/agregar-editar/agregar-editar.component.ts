import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { tarea } from 'src/app/interface/tarea';
import { TareaService } from 'src/app/services/tarea.service';



@Component({
  selector: 'app-agregar-editar',
  templateUrl: './agregar-editar.component.html',
  styleUrls: ['./agregar-editar.component.css']
})
export class AgregarEditarComponent implements OnInit {
    loading: boolean = false;
    form : FormGroup;
    id : number;
    operacion : string = 'Agregar'

    constructor(private fb:FormBuilder,
       
      private _tareaService: TareaService,
      private aRoute : ActivatedRoute) {
      this.form = this.fb.group({
        user:['',Validators.required],
        linea:['',Validators.required],
        concepto:['',Validators.required],
        horas:['',Validators.required]
      })
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
      console.log(this.id);
    }
    ngOnInit(): void{
      if(this.id != 0){
        this.operacion ='Editar';
        this.obtenertarea(this.id);

      }
    }
    obtenertarea(id : number){
        this.loading =true;
        this._tareaService.getTareas(id).subscribe(data =>{
          console.log(data)
          this.loading = false;
        })
    }

    agregartarea(){
      const user=this.form.value.user;
      const tarea: tarea={
        user: this.form.value.user,
        linea: this.form.value.linea,
        concepto: this.form.value.concepto,
        horas:this.form.value.horas
      //const user=this.form.get('user')?.value
      //const user=this.form.value.user;
      }
      //envia a backend
      this._tareaService.addTarea(tarea).subscribe(data => {
        console.log(data)
      })
    } 
}
