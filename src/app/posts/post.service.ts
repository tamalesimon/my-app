import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
   }

   getPosts() {
    return this.http.get(this.url)
   }

   updatePost() {
   return this.http.patch(this.url + '/1', JSON.stringify({ isRead: true }))
      .pipe(catchError((error: Response) => {
        if (error.status === 404)
          return throwError(() => new NotFoundError())
        return throwError(() => new AppError());
      }))
   }

   createPost(post: any){
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(catchError((error: Response) => {
        if (error.status === 400)
          return throwError(() => new BadRequestError(error.json()));
      return throwError(() => new AppError(error.json()));
      }) )
   }

   deletePost(id: any) {
    return this.http.delete(this.url + '/' + id)
      .pipe( catchError((error: Response) => {
        if (error.status === 404)
          return throwError(() => new NotFoundError())
        return throwError(() => new AppError());
      }))
   }
}
