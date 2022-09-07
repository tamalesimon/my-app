import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  posts: any[] = [{}];
  url: string = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) {
    http.get(this.url)
    .subscribe(response => {
      console.log(response);
      this.posts = response as any[];
      console.log(this.posts);
    })
  }

  createPost(titleInput: HTMLInputElement) {
this.http.post(this.url, JSON.stringify(titleInput))
.subscribe(response => {
  console.log(response as any[]);
})
  }


}
