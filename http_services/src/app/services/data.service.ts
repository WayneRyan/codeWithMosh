import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class DataService {

  constructor(private url: string, private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<any[]>(this.url);
  }

  create(resource: { id: undefined; title: string }) {
    return this.httpClient.post<any>(this.url, JSON.stringify(resource));
  }


  update(id: any) {
    return this.httpClient.patch(this.url + '/' + id, JSON.stringify({isRead: true}));
  }

  delete(id: any) {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
