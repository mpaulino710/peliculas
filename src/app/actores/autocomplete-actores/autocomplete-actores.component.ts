import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor() { }

  control = new FormControl('');
  

  actores = [
    {nombre: 'Tom Holland', personaje: '', foto: 'https://cdn141.picsart.com/299695665089201.jpg?type=webp&to=crop&r=256'},
    {nombre: 'Tom Hanks', personaje: '', foto: 'https://www.stylist.co.uk/images/app/uploads/2017/12/01110921/tom-hanks-sexual-harassment-scandal-crop-1512126569-547x547.jpg?w=256&h=256&fit=max&auto=format%2Ccompress'},
    {nombre: 'Samuel L. Jackson', personaje: '', foto: 'https://b.thumbs.redditmedia.com/yVxW9IIbtyBK1fkvKd5G9ZDokBcwZhTKTZhQVwAmFhM.png'},
    {nombre: 'Margot Robbie', personaje: '', foto: 'https://pbs.twimg.com/media/CetqoLIWwAABK2h.jpg'}
  ];

  actoresOriginal = this.actores;

  actoresSeleccionado =[];
  columnasAMostrar = ['imagen','nombre','personaje','acciones'];

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      this.actores = this.actoresOriginal;
      
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1);
    })
  }

  opcionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    this.actoresSeleccionado.push(event.option.value);
    this.control.patchValue('');
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }

  eliminar(actor: any): void {
    const indice = this.actoresSeleccionado.findIndex(a => a.nombre === actor.nombre);
    this.actoresSeleccionado.splice(indice,1);
    this.table.renderRows();
  }

  finalizaArrastre(event: CdkDragDrop<any[]>) {
    const indicePrevio = this.actoresSeleccionado.findIndex(
      actor => actor === event.item.data
    );

    moveItemInArray(this.actoresSeleccionado, indicePrevio, event.currentIndex);

    this.table.renderRows();
  }

}
