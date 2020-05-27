import {Component, EventEmitter, OnInit} from '@angular/core';
import {NewsService} from "../shared/service/news.service";
import {AnimalService} from "../shared/service/animal.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NewsService, AnimalService]
})
export class HomeComponent implements OnInit {

  news: any;
  animals: any;

  constructor(public animalService: AnimalService, public newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNewsList().subscribe(news => this.news = news);
    this.animalService.getAnimalList().subscribe(animals => this.animals = animals);
  }



}
