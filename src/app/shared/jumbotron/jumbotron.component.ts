import { Component, Input, OnInit } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  @Input() Heading: string;
  constructor(public property: PropertyAccessService) {}

  ngOnInit() {}
}
