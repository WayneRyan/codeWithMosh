import {Component, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {

  posts: any[] | undefined;

  constructor(private service: PostService) {
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value, id: undefined}
    input.value = '';
    this.service.createPost(post).subscribe({
      next: response => {
        post.id = response.id;
        this.posts?.splice(0, 0, post);
      },
      error: message => {
        console.log(message);
      }
    });
  }

  updatePost(post: any) {
    this.service.updatePost(post.id).subscribe({
      next: response => {
        console.log(response);
      },
      error: message => {
        console.log(message);
      }
    });
  }

  deletePost(post: any) {
    this.service.deletePost(post.id).subscribe({
      next: response => {
        console.log(response);
        this.posts?.splice(this.posts?.indexOf(post), 1);
      },
      error: message => {
        console.log(message);
      }
    });
  }

  ngOnInit(): void {
    this.service.getPosts().subscribe({
      next: response => {
        this.posts = response;
      },
      error: message => {
        console.log(message);
      }
    });
  }
}
