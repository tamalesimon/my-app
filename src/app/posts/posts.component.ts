import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';

@Component({selector: 'app-posts', templateUrl: './posts.component.html', styleUrls: ['./posts.component.css']})
export class PostsComponent implements OnInit {
    posts : any[] = [];

    constructor(private service : PostService) {}

    ngOnInit() {
        this.service.getPosts()
        .subscribe(
          response => {
            this.posts = response as any[];
        },
        error => {
            alert('An unexpected error occurred.');
            console.log(error);
        })
    }

    createPost(titleInput : HTMLInputElement) {
        let post: any = {
            title: titleInput.value
        };
        titleInput.value = '';

        this.service.createPost(post)
        .subscribe(
          response => {
            post.id = response;
            this.posts.splice(0, 0, post);
        },
        (error: Response) => {
          if(error.status === 400){
            //this.form.setErrors(error.json());
          }
          else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
        });
    }

    updatePost(post : any) {
        this.service.updatePost()
        .subscribe(
          response => {
            console.log(response);
        },
        error => {
            alert('An unexpected error occurred.');
            console.log(error);
        })
    }

    deletePost(post : any) {
        this.service.deletePost(post.id)
        .subscribe(
          response => {
            let index = this.posts.indexOf(post);
            this.posts.splice(index, 1);
        },
        (error: Response) => {
          if(error.status === 404)
            alert('This post has already been deleted.');
          else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
        });
    }

}

