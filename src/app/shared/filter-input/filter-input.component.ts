import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ProductItem } from '@shared/interfaces';
@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent implements OnInit {
  @Output() filter: EventEmitter<string> = new EventEmitter();
  constructor(public property: PropertyAccessService) {}

  ngOnInit() {}
  onFilter(option) {
    this.filter.emit(option);
  }
}
