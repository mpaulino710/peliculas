import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRating = 5;
  @Input()
  ratingSelecionado = 0;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();

  votado = false;
  maximoRatingArr = [];
  ratingAnterior = 0;

  constructor() { }

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index: number): void {
    this.ratingSelecionado = index + 1;
  }

  manejarMouseLeave(){
    if(this.ratingAnterior !== 0){
      this.ratingSelecionado = this.ratingAnterior;
    }else{
      this.ratingSelecionado = 0;
    }
  }

  rate(index: number): void {
    this.ratingSelecionado = index + 1;
    this.votado = true;
    this.ratingAnterior = this.ratingSelecionado;
    this.rated.emit(this.ratingSelecionado);
  }
}
