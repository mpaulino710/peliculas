import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { generoCreacionDTO, generoDTO } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + 'generos';

  public obtenerTodos(pagina: number, cantidadElementoAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('RecordsPorPagina', cantidadElementoAMostrar.toString())
    return this.http.get<generoDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public crear(genero: generoCreacionDTO){
    return this.http.post(this.apiURL, genero);
  }
}
