import { Injectable } from '@angular/core';
import {News} from "../models/news";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news: News[];
  readonly baseURL = 'http://localhost:3000/news';

  constructor(public http: HttpClient) { }

  getNewsList(){
    return this.http.get(this.baseURL);
  }
}
