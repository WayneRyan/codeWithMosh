import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent{

  @Input('is-favorite') isFavorite?: boolean;
  @Output('change') change = new EventEmitter();

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}


