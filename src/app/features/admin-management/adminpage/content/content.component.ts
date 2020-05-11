import { Component, OnInit } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  constructor(public property: PropertyAccessService) {}

  ngOnInit() {}
}
