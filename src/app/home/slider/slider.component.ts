import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images = ['https://zoo.kiev.ua/upload/iblock/53f/53f05e9a02479c0ef933e5e894802f42.JPG', 'https://svoimi-rykami.ru/wp-content/uploads/2018/10/%D0%A1%D0%BF%D0%B0%D1%80%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%BB%D0%BE%D0%BD%D0%BE%D0%B2.jpg', 'https://zoo.kiev.ua/upload/iblock/109/109bbf46590d888243fd2861603cb717.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}
