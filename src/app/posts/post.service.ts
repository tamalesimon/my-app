import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
   }

   getPosts() {
    return this.http.get(this.url);
   }

   updatePost() {
   return this.http.patch(this.url + '/1', JSON.stringify({ isRead: true }))
   }

   createPost(post: any){
    return this.http.post(this.url, JSON.stringify(post))
   }

   deletePost(id:any) {
    return this.http.delete(this.url + '/' + id)
   }
}
