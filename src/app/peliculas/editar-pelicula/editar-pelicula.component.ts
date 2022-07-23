import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: PeliculaDTO = {
    titulo: 'Spider-Man', 
    trailer: 'asdfds', 
    enCine: true, 
    resumen:'# adf adf', 
    fechaLanzamiento: new Date(), 
    poster: 'https://blog.es.playstation.com/tachyon/sites/14/2022/06/adf0c6e3da060a9f9581c12eff047a48668fe616.jpg?resize=1088%2C612&crop_strategy=smart&zoom=1.5'
  }

  ngOnInit(): void {
  }

  guardarCambios(pelicula: PeliculaCreacionDTO): void {
    console.log(pelicula);
  }

}
