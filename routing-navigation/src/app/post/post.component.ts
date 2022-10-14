import {Component, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any[] | undefined;

  constructor(private service: PostService) {
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value, id: undefined}
    input.value = '';
    this.service.create(post).subscribe({
      next: response => {
        console.log("I got here");
        post.id = response.id;
        this.posts?.splice(0, 0, post);
      },
      error: (error: Error) => {
        console.log(error.message);
      }
    });
  }

  updatePost(post: any) {
    this.service.update(post.id).subscribe({
      next: response => {
        console.log("I got here");
        console.log(response);
      },
      error: (error: Error) => {
        console.log(error.message);
      }
    });
  }

  deletePost(post: any) {
    this.service.delete(post.id).subscribe({
      next: response => {
        console.log("I got here");
        console.log(response);
        this.posts?.splice(this.posts?.indexOf(post), 1);
      },
      error: (error: Error) => {
        console.log(error.message);
      }
    });
  }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: response => {
        this.posts = response;
      },
      error: (error: Error) => {
        console.log(error.message);
      }
    });
  }
}
