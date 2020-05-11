import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { IMenu } from '@shared/interfaces';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {
  // go to top
  menuItems: IMenu[];
  constructor(public property: PropertyAccessService) {}

  ngOnInit() {
    this.menuItems = [
      {
        name: 'Home',
        icon: 'home',
        url: '/home'
      },
      {
        name: 'Electronics',
        icon: 'developer_board',
        childs: [
          {
            name: 'Televisions',
            icon: 'tv',
            url: '/televisions'
          },
          {
            name: 'Laptops',
            icon: 'laptop',
            url: '/laptops'
          },
          {
            name: 'Headphones',
            icon: 'headset',
            url: '/headphones'
          }
        ]
      },
      {
        name: 'Mobile',
        icon: 'mobile_screen_share',
        childs: [
          // {
          //   name: 'Accessories',
          //   icon: 'build',
          //   url: '/mobile_accessories'
          // },
          {
            name: 'Tablets',
            icon: 'tablet',
            url: '/tablets'
          },
          {
            name: 'Smartphones',
            icon: 'mobile_friendly',
            url: '/smartphones'
          }
        ]
      },
      {
        name: 'mens_fashion',
        icon: 'accessibility',
        childs: [
          {
            name: 'TShirts',
            url: '/mens_tshirts'
          },
          {
            name: 'Shirts',
            url: '/mens_shirts'
          },
          {
            name: 'Shoes',
            url: '/mens_shoes'
          },
          {
            name: 'sunglass',
            url: '/mens_sunglasses'
          }
        ]
      },
      {
        name: 'womens_fashion',
        icon: 'accessibility_new',
        childs: [
          {
            name: 'Saree',
            url: '/womens_saree'
          },
          {
            name: 'Dress',
            url: '/womens_dress'
          },
          {
            name: 'Shoes',
            url: '/womens_shoes'
          },
          {
            name: 'Watch',
            url: '/womens_watch'
          }
          // {
          //   name: 'nightwear',
          //   url: '/womens_nightwear'
          // }
        ]
      }
      // {
      //   name: 'Multiple Level',
      //   icon: 'view_module',
      //   childs: [
      //     {
      //       name: 'Level-1',
      //       childs: [
      //         {
      //           name: 'Level-2',
      //           childs: [
      //             {
      //               name: 'Level-3',
      //               childs: [
      //                 {
      //                   name: 'Level-4',
      //                   childs: [
      //                     {
      //                       name: 'Level-5',
      //                       url: '/trialurl9'
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         }
      //       ]
      //     }
      //   ]
      // }
    ];
  }

  fullscreenstatus(event) {}
}
