import { Component, Input, OnInit } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() items_category1;
  @Input() items_category2;
  constructor(public property: PropertyAccessService) {}

  ngOnInit() {}
}
