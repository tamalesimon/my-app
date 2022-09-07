import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
@Input('isFavorite') isFavorite: boolean = true;
@Output() change = new EventEmitter();

  onFavoriteClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValues: this.isFavorite});
  }
}

export interface FavoriteChangedEventArgs {
  newValues: boolean;
}
