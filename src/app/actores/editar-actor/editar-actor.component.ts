import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: actorDTO = {nombre: 'Miguel', fechaNacimiento: new Date(), foto: 'https://i.pinimg.com/736x/18/bb/89/18bb89ab59ed3de921c73bc8eccd4d4e.jpg'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id)
    })
  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
  }

}
