import { Component, Input, OnInit } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-category-tiles',
  templateUrl: './category-tiles.component.html',
  styleUrls: ['./category-tiles.component.scss']
})
export class CategoryTilesComponent implements OnInit {
  @Input() categoryitems;
  constructor(public property: PropertyAccessService) {}

  ngOnInit() {}
}
