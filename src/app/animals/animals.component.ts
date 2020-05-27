import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AnimalService} from "../shared/service/animal.service";
import {Animal} from "../shared/models/animal";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  providers: [AnimalService]
})
export class AnimalsComponent implements OnInit {

  constructor(private router: Router, public animalService:AnimalService) { }

  ngOnInit(): void {
    this.refreshAnimalsList();
  }

  refreshAnimalsList() {
    this.animalService.getAnimalList().subscribe((res) => {
      this.animalService.animals = res as Animal[];
    });
  }
}
