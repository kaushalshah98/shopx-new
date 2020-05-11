import { Component, Input, OnInit } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {
  one = true;
  two = false;
  three = false;
  @Input() product;
  constructor(public property: PropertyAccessService) {}

  ngOnInit() {}
  getnumber(index: number) {
    if (index < 1) {
      return this.one;
    } else if (index === 1) {
      return this.two;
    } else {
      return this.three;
    }
  }
  changeimage(index: number) {
    if (index < 1) {
      this.changevalue(true, false, false);
    } else if (index === 1) {
      this.changevalue(false, true, false);
    } else {
      this.changevalue(false, false, true);
    }
  }
  changevalue(one: boolean, two: boolean, three: boolean) {
    this.one = one;
    this.two = two;
    this.three = three;
  }
}
