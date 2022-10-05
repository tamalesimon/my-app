import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[] = [];

  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe({
        next: (followers) => {
          this.followers = followers as any;
        },
        error: (error: AppError) => {
          if (error  instanceof AppError)
            alert('An unexpected error occurred.');
          else
            throw error;
        }
      });
  }
}
