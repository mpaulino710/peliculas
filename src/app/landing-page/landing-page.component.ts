import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {

      this.peliculasEnCines = [{
        titulo: 'Spiderman',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster: 'https://www.cinemascomics.com/wp-content/uploads/2022/03/Spider-Man-No-Way-Home-traje-final.jpg'
      },{
        titulo: 'Batman',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 963.78,
        poster: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/03/ya-sabemos-plataforma-desembarcara-batman-mismo-ano-2634205.jpg?itok=uW3hHZc0'
      },{
        titulo: 'Moana',
        fechaLanzamiento: new Date('2018-10-14'),
        precio: 1569.68,
        poster: 'http://cdn2.upsocl.com/wp-content/uploads/2020/03/portada-moana.jpg'
      },{
        titulo: 'SuperMan',
        fechaLanzamiento: new Date('2022-09-11'),
        precio: 300.99,
        poster: 'https://i5.walmartimages.com/asr/06ea30e9-7f6b-47d2-8a4b-cc359c721bd7_1.55ae179dda2e13751a3ee2edb1641be0.jpeg'
      }];
  }

  peliculasEnCines;
  peliculasProximosEstrenos= [];

}
