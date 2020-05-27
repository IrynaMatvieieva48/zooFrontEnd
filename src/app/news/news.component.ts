import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NewsService} from "../shared/service/news.service";
import {Animal} from "../shared/models/animal";
import {News} from "../shared/models/news";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  searchString = '';

  constructor(private router: Router, public newsService: NewsService) { }

  ngOnInit(): void {
    this.refreshAnimalsList();
  }

  refreshAnimalsList() {
    this.newsService.getNewsList().subscribe((res) => {
      this.newsService.news = res as News[];
    });
  }


  onSubmit(form: NgForm) {
    this.searchString = form.value.searchString;
  }

  contains(i: number, str: string){
    return this.newsService.news[i].name.includes(str)
  }
}
