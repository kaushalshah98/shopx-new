import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { BehaviorSubject, Subject } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  paddingtop: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  selectedIndex: number;
  constructor(public property: PropertyAccessService) {}

  ngOnInit() {
    this.fullscreenstatus(this.property.fullscreen);
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }
  getselectedIndex(event) {
    if (event === false) {
      this.selectedIndex = this.selectedIndex - 1;
    }
  }

  fullscreenstatus(event) {
    if (event) {
      this.paddingtop.next(100);
    } else {
      this.paddingtop.next(0);
    }
  }
}
