import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-zoo-map',
  templateUrl: './zoo-map.component.html',
  styleUrls: ['./zoo-map.component.css']
})
export class ZooMapComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
