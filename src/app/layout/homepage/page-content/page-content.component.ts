import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductItem } from '@shared/interfaces';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  dataLoading: EventEmitter<boolean> = new EventEmitter(true);
  categoryitems: any[];
  items_category1: any[];
  items_category2: any[];
  items_slider1: any[];
  items_slider2: any[];
  show: boolean;
  heading = 'HOMEPAGE';
  productcarouselitems1: any;
  productcarouselitems2: any;
  productcarouselitems3: any;
  constructor() {}

  ngOnInit() {
    document.getElementById('mainsearch').style.visibility = 'visible';
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.show = true;
      // items for category component
      this.categoryitems = [
        {
          name: '"Men\'s casual shoes | Under ₹599"',
          image:
            'https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/sh1x._SY304_CB426335760_.jpg',
          url: '/mens_shoes'
        },
        {
          name: 'Top Brands in TVs | Up to 50% off ',
          image:
            'https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/GW/DCQC/186x116_4._SY116_CB421822463_.jpg',
          url: '/televisions'
        },
        {
          name: 'Mobile accessories | starting ₹99',
          image:
            'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/MobileAccessories/MSO/DashboardCards/Uber/Cable_2x._SY116_CB446812015_.jpg',
          url: '/mobile_accessories'
        }
      ];
      this.productcarouselitems1 = [
        {
          name: 'Apple Ipad',
          image: 'https://www.tutorialrepublic.com/examples/images/products/ipad.jpg',
          price: 550
        },
        {
          name: 'Sony Headphone',
          image: 'https://www.tutorialrepublic.com/examples/images/products/headphone.jpg',
          price: 550
        },
        {
          name: 'Macbook Air',
          image: 'https://www.tutorialrepublic.com/examples/images/products/macbook-air.jpg',
          price: 550
        },
        {
          name: 'Sony Play Station',
          image: 'https://www.tutorialrepublic.com/examples/images/products/play-station.jpg',
          price: 550
        }
      ];
      this.productcarouselitems2 = [
        {
          name: 'Nikon DSLR',
          image: 'https://www.tutorialrepublic.com/examples/images/products/nikon.jpg',
          price: 550
        },
        {
          name: 'Apple Ipad',
          image: 'https://www.tutorialrepublic.com/examples/images/products/ipad.jpg',
          price: 550
        },
        {
          name: 'Samsung Galaxy S8',
          image: 'https://www.tutorialrepublic.com/examples/images/products/galaxy.jpg',
          price: 550
        },
        {
          name: 'Bose Speaker',
          image: 'https://www.tutorialrepublic.com/examples/images/products/speaker.jpg',
          price: 550
        }
      ];
      this.productcarouselitems3 = [
        {
          name: 'Google Pixel',
          image: 'https://www.tutorialrepublic.com/examples/images/products/pixel.jpg',
          price: 550
        },
        {
          name: 'Apple Ipad',
          image: 'https://www.tutorialrepublic.com/examples/images/products/ipad.jpg',
          price: 550
        },
        {
          name: 'Apple Watch',
          image: 'https://www.tutorialrepublic.com/examples/images/products/watch.jpg',
          price: 550
        },
        {
          name: 'Apple Ipad',
          image: 'https://www.tutorialrepublic.com/examples/images/products/ipad.jpg',
          price: 550
        }
      ];
      // items for category-card component
      this.items_category1 = [
        {
          name: 'Iphone',
          image:
            'https://easetemplate.com/free-website-templates/mobistore/images/display_img_2.png',
          url: '/smartphones'
        },
        {
          name: 'Samsung',
          image:
            'https://easetemplate.com/free-website-templates/mobistore/images/display_img_3.png',
          url: '/smartphones'
        }
      ];
      this.items_category2 = [
        {
          name: 'Laptops',
          image:
            'https://store.hp.com/app/assets/images/product/3JE20AV_1/center_facing.png?_=1562933961449',
          url: '/laptops'
        },
        {
          name: 'Headphones',
          image:
            'https://www.plantronics.com/content/dam/plantronics/products/backbeat/backbeat-pro-2-black.png',
          url: '/headphones'
        },
        {
          name: 'Mens Fashion',
          image: 'https://i.pinimg.com/originals/8e/cd/27/8ecd27425563e902e541e1489b9ff355.jpg',
          url: '/mens_shirts'
        },
        {
          name: 'Womens Fashion',
          image: 'https://img1.eshakti.com/clothImages/cl0071618ML.jpg?w=1480',
          url: '/womens_saree'
        }
      ];

      this.items_slider1 = [
        {
          name: 'Hush Pupppies Shoes',
          description: 'Shoes made for your Comfort and style',
          image:
            'https://www.hushpuppies.com/on/demandware.static/-/Sites-hushpuppies_us-Library/default/dw06306caa/content/seasonal-content/homepage/2020/01/Mobile-Hero-Image.jpg'
        },
        {
          name: 'Mens Outfit',
          description: 'Outfit for mens',
          image:
            'https://image.winudf.com/v2/image1/Y29tLmR0ZWNoLm11bHRpYWNjZXNzLm1lbnNmYXNoaW9uMjAxN19zY3JlZW5fNl8xNTUxMTE5ODI1XzA5Ng/screen-6.jpg?fakeurl=1&type=.jpg'
        }
      ];
      this.items_slider2 = [
        {
          name: 'Dress',
          description: 'HIGH LOW FLORAL DRESS',
          image: 'https://photo.venus.com/im/18062700.jpg?preset=product'
        },
        {
          name: 'Ladies Watch',
          description: 'Womens casual waterfproof Watch',
          image: 'https://thegadgetflow.com/wp-content/uploads/2017/09/Luxury-Womens-Watch-01.jpg'
        }
      ];
    }, 1000);
  }
}
