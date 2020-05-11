import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { IMenu } from '@shared/interfaces';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminpageComponent implements OnInit {
  menuItems: IMenu[];

  constructor(public property: PropertyAccessService) {}

  ngOnInit() {
    this.fullscreenstatus(this.property.fullscreen);
    this.menuItems = [
      {
        name: 'Home',
        icon: 'home',
        url: '/admin/admin-management'
      },
      {
        name: 'product_management',
        icon: 'shopping_basket',
        childs: [
          {
            name: 'view_all_products',
            icon: 'pageview',
            url: '/admin/viewproducts'
          },
          {
            name: 'add_a_product',
            icon: 'add_box',
            url: '/admin/addproduct'
          },
          {
            name: 'update_a_product',
            icon: 'edit',
            url: '/admin/updateproduct'
          },
          {
            name: 'delete_a_product',
            icon: 'delete',
            url: '/admin/deleteproduct'
          }
        ]
      },
      {
        name: 'user_management',
        icon: 'account_circle',
        childs: [
          {
            name: 'view_user',
            icon: 'people',
            url: '/admin/viewusers'
          },
          {
            name: 'block_user',
            icon: 'block',
            url: '/admin/blockuser'
          },
          {
            name: 'view_orders',
            icon: 'assignment',
            url: '/admin/vieworders'
          }
        ]
      }
    ];
  }
  fullscreenstatus(event) {
    if (event) {
      this.property.height.next(540);
    } else {
      this.property.height.next(405);
    }
  }
}
