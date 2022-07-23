import { Component, OnInit } from '@angular/core';
import { Coordenada } from 'src/app/utilidades/mapa/coordenada';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor() { }

  

  modelo: cineDTO = {nombre: 'Sambil',latitud: 19.467031783110006, longitud: -70.66046297550203};

  ngOnInit(): void {
  }

  guardarCambios(cine: cineCreacionDTO) {
    console.log(cine);
  }

}
