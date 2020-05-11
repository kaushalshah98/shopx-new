import { Component, Input, OnInit } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() items_slider1;
  @Input() items_slider2;
  constructor(public property: PropertyAccessService) {}

  ngOnInit() {}
}
