import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordenada } from 'src/app/utilidades/mapa/coordenada';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-forumlario-cine',
  templateUrl: './forumlario-cine.component.html',
  styleUrls: ['./forumlario-cine.component.css']
})
export class ForumlarioCineComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  coordenadaInicial: Coordenada[] =[];

  @Input()
  modelo: cineCreacionDTO;

  @Output()
  guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        }
      ],
      latitud: [
        '',
        {
          validators: [Validators.required],
        }
      ],
      longitud: [
        '',
        {
          validators: [Validators.required],
        }
      ]
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
      this.coordenadaInicial.push({latitud: this.modelo.latitud, longitud: this.modelo.longitud});
    }
  }

  OnSubmit(): void {
    this.guardarCambios.emit(this.form.value);
  }

  coordenadaSeleccionada(coordena: Coordenada){
    this.form.patchValue(coordena);
  }

}
