import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-forumlario-actores',
  templateUrl: './forumlario-actores.component.html',
  styleUrls: ['./forumlario-actores.component.css']
})
export class ForumlarioActoresComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  modelo: actorDTO;

  @Output()
  OnSubmit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required]
        },
      ],
      fechaNacimiento: '',
      foto: '',
      biografia: ''
    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  onSubmit(){
    this.OnSubmit.emit(this.form.value);
  }

  archivoSeleccionado(file: File){
    this.form.get('foto').setValue(file);
  }

  cambioMarkdown(texto: string): void {
    this.form.get('biografia').setValue(texto);
  }

}
