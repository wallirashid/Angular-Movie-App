import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_SIZES } from "../../constants/images_sizes";
import { Movie } from 'src/app/models/movies';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  imageSize = IMAGE_SIZES;


  @Input() itemData: Movie | null= null;
  constructor() { }

  ngOnInit(): void {
  }
  
}
