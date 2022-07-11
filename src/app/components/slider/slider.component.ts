import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations:[
    trigger('fade',[
      state('void',style({opacity:0})),
      transition('void => *',[animate('1s')]),
      transition('* => void',[animate('200ms')])
    ])
  ]
})
export class SliderComponent implements OnInit {
  currentSliderIndex:number= 0
  @Input() movies:Movie[] = [];
  constructor() { }
 
  ngOnInit(): void {
    setInterval(() => {      
        this.currentSliderIndex = ++this.currentSliderIndex % this.movies.length; 
    },3000);
  }

}
