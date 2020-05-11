import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { IMenu } from '@shared/interfaces';

@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuitemsComponent implements OnInit {
  expanded: boolean;
  cururl: any;
  @Input() item: IMenu;
  @Input() depth;
  @Input() innerdepth = 0;

  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  step = 0;
  constructor(public router: Router, public property: PropertyAccessService) {}

  setStep(index: number) {
    this.step = index;
  }

  ngOnInit() {
    this.cururl = window.location.pathname
      .replace('/tm/', '/')
      .substring(1)
      .concat('/');
    if (this.item.childs) {
      for (const urlLevel1 of this.item.childs) {
        if (
          this.cururl === urlLevel1.url ||
          this.cururl.slice(0, -1) === urlLevel1.url ||
          this.cururl.concat('/') === urlLevel1.url ||
          '/'.concat(this.cururl).slice(0, -1) === urlLevel1.url
        ) {
          this.step = this.depth;
        }
      }
    }
  }
  open(item) {
    if (item.url) {
      this.router.navigate([item.url]);
    } else {
      this.router.navigateByUrl(this.router.url);
    }
  }
  getItemCSS(item) {
    if (item.childs) {
      return '';
    } else if (!item.url) {
      return '';
    }
    return 'activeMenu';
  }
  getItemURL(item) {
    if (item.url) {
      return item.url;
    }
    return this.router.url;
  }
}
