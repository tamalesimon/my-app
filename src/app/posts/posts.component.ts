import {Component, OnInit} from '@angular/core';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';
import { NotFoundError } from '../common/not-found-error';
import {PostService} from './post.service';

@Component({selector: 'app-posts', templateUrl: './posts.component.html', styleUrls: ['./posts.component.css']})
export class PostsComponent implements OnInit {
    posts : any[] = [];

    constructor(private service : PostService) {}

    ngOnInit() {
        this.service.getAll()
        .subscribe({
          next: (posts) => {
            this.posts = posts as any;
          },
          error: (error: AppError) => {
            if (error instanceof AppError)
              alert('An unexpected error occurred.');
            else
              throw error;
          }
        })
    }

    createPost(titleInput : HTMLInputElement) {
        let post: any = {
            title: titleInput.value
        };
        this.posts.splice(0, 0, post);
        titleInput.value = '';

        this.service.create(post)
        .subscribe({
          next: (newPost) => {
            post.id = newPost;

          },
          error: (error: AppError) => {
            this.posts.splice(0, 1);

            if(error instanceof BadRequestError)
              alert('Bad Request')
            else{
              alert('unexpected error has happened')
              console.log(error)
            }
          }
        });
    }

    updatePost(post : {}) {
        this.service.update(post)
        .subscribe({
          next: (updatePost) => {
            console.log(updatePost)
          },
          error: (error: AppError) => {}
        })
    }

    deletePost(post: any) {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log(post)

        this.service.delete(post.id)
        .subscribe({
          next: () => {
          },
          error: (error: AppError) => {
            this.posts.splice(index, 0, post);
            if(error instanceof NotFoundError)
              alert('This post has already been deleted.');
            else{
              alert('An unexpected error occurred.');
              console.log(error);
          }
        }
     });
    }
}
