import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }
  courses: any;

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("favorite changed", eventArgs.newValues);
  }

  task = {
    title: "Review applications",
    assignee: {
      name: "John Smith"
    }
  }
}
