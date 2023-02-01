import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environmets/environment';
import { tarea } from '../interface/tarea';


@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Tarea/';

  constructor(private http: HttpClient ) { }

  getTarea () : Observable<tarea[]> {
    return this.http.get<tarea[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  getTareas(id :number) :Observable<tarea>{
    return this.http.get<tarea>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  } 
  deleteTarea(id :number) :Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
  addTarea( Tarea: tarea) :Observable<tarea>{
      return this.http.post<tarea>(`${this.myAppUrl}${this.myApiUrl}`,Tarea);
  }
  updateTarea(id: number, Tarea: tarea): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}`,Tarea);

  }
}
