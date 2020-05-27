import { Injectable } from '@angular/core';
import {Animal} from "../models/animal";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  animals: Animal[];
  readonly baseURL = 'http://localhost:3000/animals';

  constructor(public http: HttpClient) { }

  getAnimalList(){
    return this.http.get(this.baseURL);
  }

}
