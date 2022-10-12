import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }

  getPosts() {
    return this.httpClient.get<any[]>(this.url);
  }

  createPost(post: { id: undefined; title: string }) {
    return this.httpClient.post<any>(this.url, JSON.stringify(post));
  }

  updatePost(id: any) {
    return this.httpClient.patch(this.url + '/' + id, JSON.stringify({isRead: true}));
  }

  deletePost(id: any) {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
