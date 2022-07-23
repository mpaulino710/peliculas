import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder, 
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  form: FormGroup;

  generos = [
    {id: 1, nombre: 'Drama'},
    {id: 2, nombre: 'Acción'},
    {id: 3, nombre: 'Comedia'}
  ];

  peliculas = [{
    titulo: 'Spiderman',
    enCine: false,
    proximosEstrenos: true,
    generos: [1,2],
    poster: 'https://www.cinemascomics.com/wp-content/uploads/2022/03/Spider-Man-No-Way-Home-traje-final.jpg'
  },{
    titulo: 'Batman',
    enCine: true,
    proximosEstrenos: false,
    generos: [3],
    poster: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/03/ya-sabemos-plataforma-desembarcara-batman-mismo-ano-2634205.jpg?itok=uW3hHZc0'
  },{
    titulo: 'Moana',
    enCine: true,
    proximosEstrenos: false,
    generos: [2],
    poster: 'http://cdn2.upsocl.com/wp-content/uploads/2020/03/portada-moana.jpg'
  },{
    titulo: 'SuperMan',
    enCine: true,
    proximosEstrenos: true,
    generos: [3],
    poster: 'https://i5.walmartimages.com/asr/06ea30e9-7f6b-47d2-8a4b-cc359c721bd7_1.55ae179dda2e13751a3ee2edb1641be0.jpeg'
  }];

  peliculasOriginal = this.peliculas;
  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  };

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal)
    this.leerValoresUrl();
    this.buscarPeliculas(this.form.value);
    
    this.form.valueChanges
      .subscribe(valores => {
        this.peliculas = this.peliculasOriginal;
        this.buscarPeliculas(valores);
        this.busquedadEnUrl();
      })
  }

  private busquedadEnUrl():void {
    var queryString = [];
    var valoresFormulario = this.form.value;

    if (valoresFormulario.titulo){
      queryString.push(`titulo=${valoresFormulario.titulo}`);
    }

    if (valoresFormulario.generoId != 0){
      queryString.push(`generoId=${valoresFormulario.generoId}`);
    }

    if (valoresFormulario.proximosEstrenos) {
      queryString.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }

    if (valoresFormulario.enCines){
      queryString.push(`enCine=${valoresFormulario.enCines}`);
    }

    this.location.replaceState('peliculas/buscar',queryString.join('&'));
  }

  private leerValoresUrl(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      var objeto: any ={};
      if (params.titulo){
        objeto.titulo = params.titulo;
      }

      if (params.generoId){
        objeto.generoId = Number(params.generoId);
      }

      if (params.proximosEstrenos){
        objeto.proximosEstrenos = Number(params.proximosEstrenos);
      }

      if (params.enCines){
        objeto.enCines = Number(params.enCines);
      }

      this.form.patchValue(objeto);
    });
  }

  buscarPeliculas(valores: any): void {
    if (valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1)
    }

    if (valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1)
    }

    if (valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos)
    }

    if (valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCine)
    }
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }

}
