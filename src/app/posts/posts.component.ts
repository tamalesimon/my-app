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
        this.service.getPosts()
        .subscribe({
          next: (response) => {
            this.posts = response as any[];
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
        titleInput.value = '';

        this.service.createPost(post)
        .subscribe({
          next: (response) => {
            post.id = response;
            this.posts.splice(0, 0, post);
          },
          error: (error: AppError) => {
            if(error instanceof BadRequestError)
              alert('Bad Request')
            else{
              alert('unexpected error has happened')
              console.log(error)
            }
          }
        });
    }

    updatePost(post : any) {
        this.service.updatePost()
        .subscribe({
          next: (response) => {},
          error: (error: AppError) => {}
        })
    }

    deletePost(post : any) {
        this.service.deletePost(post.id)
        .subscribe({
          next: (response) => {
            let index = this.posts.indexOf(post);
            this.posts.splice(index, 1);
          },
          error: (error: AppError) => {
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
