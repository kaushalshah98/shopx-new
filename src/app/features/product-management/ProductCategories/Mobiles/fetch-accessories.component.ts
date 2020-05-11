import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductItem } from '@shared/interfaces';
@Component({
  selector: 'app-fetch-accessories',
  template: `
    <div class="list-product-style">
      <app-jumbotron [Heading]="heading"></app-jumbotron>
      <app-filter-input (keyup)="onInputChanged($event.target.value)" (filter)="onFilter($event)">
      </app-filter-input>
      <app-spinner [loading]="dataLoading" class="centre-product-spinner"></app-spinner>
      <div [ngClass]="{ dimmed: dimmed }">
        <app-list-products [productitems]="products"></app-list-products>
      </div>
    </div>
  `,
  styles: []
})
export class FetchAccessoriesComponent implements OnInit {
  productitems: ProductItem[];
  heading = 'menu_item.accessories';
  @Output() filter: EventEmitter<string> = new EventEmitter();
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  products: ProductItem[];
  dimmed = false;
  constructor() {}

  ngOnInit() {
    document.getElementById('mainsearch').style.visibility = 'hidden';
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.productitems = [
        {
          name: 'Mens-Tshirts',
          category: 'MensFashion',
          innercategory: 'Shirt',
          quantity: 40,
          image: [
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/332/398/jtn9bww0/t-shirt/5/f/c/s-hm-1001-maroon-black-helmont-original-imafdfvvz65ab7vm.jpeg?q=50'
            },
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            }
          ],
          price: 400,
          details: {
            Comfort: 'Fashionably cotton',
            Fitting: 'Fitting type is slim fit',
            Ocassion: 'Casual',
            Quality:
              'All garments are subjected to the following tests fabric dimensional stability test and print quality inspection for colors and wash fastness Light weight fabric sweeps sweat away from your skin and helps regulate body temperature',
            'Care Instructions': 'Wash with mild detergent, do not bleach, dry in shade',
            Sizes: 'SL,M,L,XL,XXL,XXL',
            'Made in ': 'India'
          },
          description:
            'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
        },
        {
          name: 'Mens-Tshirts',
          category: 'MensFashion',
          innercategory: 'Shirt',
          quantity: 40,
          image: [
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/332/398/jtn9bww0/t-shirt/5/f/c/s-hm-1001-maroon-black-helmont-original-imafdfvvz65ab7vm.jpeg?q=50'
            },
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            }
          ],
          price: 400,
          details: {
            Comfort: 'Fashionably cotton',
            Fitting: 'Fitting type is slim fit',
            Ocassion: 'Casual',
            Quality:
              'All garments are subjected to the following tests fabric dimensional stability test and print quality inspection for colors and wash fastness Light weight fabric sweeps sweat away from your skin and helps regulate body temperature',
            'Care Instructions': 'Wash with mild detergent, do not bleach, dry in shade',
            Sizes: 'SL,M,L,XL,XXL,XXL',
            'Made in ': 'India'
          },
          description:
            'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
        },
        {
          name: 'Mens-Tshirts',
          category: 'MensFashion',
          innercategory: 'Shirt',
          quantity: 40,
          image: [
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/332/398/jtn9bww0/t-shirt/5/f/c/s-hm-1001-maroon-black-helmont-original-imafdfvvz65ab7vm.jpeg?q=50'
            },
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            }
          ],
          price: 400,
          details: {
            Comfort: 'Fashionably cotton',
            Fitting: 'Fitting type is slim fit',
            Ocassion: 'Casual',
            Quality:
              'All garments are subjected to the following tests fabric dimensional stability test and print quality inspection for colors and wash fastness Light weight fabric sweeps sweat away from your skin and helps regulate body temperature',
            'Care Instructions': 'Wash with mild detergent, do not bleach, dry in shade',
            Sizes: 'SL,M,L,XL,XXL,XXL',
            'Made in ': 'India'
          },
          description:
            'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
        },
        {
          name: 'Mens-Tshirts',
          category: 'MensFashion',
          innercategory: 'Shirt',
          quantity: 40,
          image: [
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/332/398/jtn9bww0/t-shirt/5/f/c/s-hm-1001-maroon-black-helmont-original-imafdfvvz65ab7vm.jpeg?q=50'
            },
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            }
          ],
          price: 400,
          details: {
            Comfort: 'Fashionably cotton',
            Fitting: 'Fitting type is slim fit',
            Ocassion: 'Casual',
            Quality:
              'All garments are subjected to the following tests fabric dimensional stability test and print quality inspection for colors and wash fastness Light weight fabric sweeps sweat away from your skin and helps regulate body temperature',
            'Care Instructions': 'Wash with mild detergent, do not bleach, dry in shade',
            Sizes: 'SL,M,L,XL,XXL,XXL',
            'Made in ': 'India'
          },
          description:
            'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
        },
        {
          name: 'Mens-Tshirts',
          category: 'MensFashion',
          innercategory: 'Shirt',
          quantity: 40,
          image: [
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/332/398/jtn9bww0/t-shirt/5/f/c/s-hm-1001-maroon-black-helmont-original-imafdfvvz65ab7vm.jpeg?q=50'
            },
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            }
          ],
          price: 400,
          details: {
            Comfort: 'Fashionably cotton',
            Fitting: 'Fitting type is slim fit',
            Ocassion: 'Casual',
            Quality:
              'All garments are subjected to the following tests fabric dimensional stability test and print quality inspection for colors and wash fastness Light weight fabric sweeps sweat away from your skin and helps regulate body temperature',
            'Care Instructions': 'Wash with mild detergent, do not bleach, dry in shade',
            Sizes: 'SL,M,L,XL,XXL,XXL',
            'Made in ': 'India'
          },
          description:
            'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
        },
        {
          name: 'Mens-Tshirts',
          category: 'MensFashion',
          innercategory: 'Shirt',
          quantity: 40,
          image: [
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/332/398/jtn9bww0/t-shirt/5/f/c/s-hm-1001-maroon-black-helmont-original-imafdfvvz65ab7vm.jpeg?q=50'
            },
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            }
          ],
          price: 400,
          details: {
            Comfort: 'Fashionably cotton',
            Fitting: 'Fitting type is slim fit',
            Ocassion: 'Casual',
            Quality:
              'All garments are subjected to the following tests fabric dimensional stability test and print quality inspection for colors and wash fastness Light weight fabric sweeps sweat away from your skin and helps regulate body temperature',
            'Care Instructions': 'Wash with mild detergent, do not bleach, dry in shade',
            Sizes: 'SL,M,L,XL,XXL,XXL',
            'Made in ': 'India'
          },
          description:
            'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
        },
        {
          name: 'Mens-Tshirts',
          category: 'MensFashion',
          innercategory: 'Shirt',
          quantity: 40,
          image: [
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/332/398/jtn9bww0/t-shirt/5/f/c/s-hm-1001-maroon-black-helmont-original-imafdfvvz65ab7vm.jpeg?q=50'
            },
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            }
          ],
          price: 400,
          details: {
            Comfort: 'Fashionably cotton',
            Fitting: 'Fitting type is slim fit',
            Ocassion: 'Casual',
            Quality:
              'All garments are subjected to the following tests fabric dimensional stability test and print quality inspection for colors and wash fastness Light weight fabric sweeps sweat away from your skin and helps regulate body temperature',
            'Care Instructions': 'Wash with mild detergent, do not bleach, dry in shade',
            Sizes: 'SL,M,L,XL,XXL,XXL',
            'Made in ': 'India'
          },
          description:
            'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
        },
        {
          name: 'Mens-Tshirts',
          category: 'MensFashion',
          innercategory: 'Shirt',
          quantity: 40,
          image: [
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/332/398/jtn9bww0/t-shirt/5/f/c/s-hm-1001-maroon-black-helmont-original-imafdfvvz65ab7vm.jpeg?q=50'
            },
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            }
          ],
          price: 400,
          details: {
            Comfort: 'Fashionably cotton',
            Fitting: 'Fitting type is slim fit',
            Ocassion: 'Casual',
            Quality:
              'All garments are subjected to the following tests fabric dimensional stability test and print quality inspection for colors and wash fastness Light weight fabric sweeps sweat away from your skin and helps regulate body temperature',
            'Care Instructions': 'Wash with mild detergent, do not bleach, dry in shade',
            Sizes: 'SL,M,L,XL,XXL,XXL',
            'Made in ': 'India'
          },
          description:
            'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
        },
        {
          name: 'Mens-Tshirts',
          category: 'MensFashion',
          innercategory: 'Shirt',
          quantity: 40,
          image: [
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/332/398/jtn9bww0/t-shirt/5/f/c/s-hm-1001-maroon-black-helmont-original-imafdfvvz65ab7vm.jpeg?q=50'
            },
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            }
          ],
          price: 400,
          details: {
            Comfort: 'Fashionably cotton',
            Fitting: 'Fitting type is slim fit',
            Ocassion: 'Casual',
            Quality:
              'All garments are subjected to the following tests fabric dimensional stability test and print quality inspection for colors and wash fastness Light weight fabric sweeps sweat away from your skin and helps regulate body temperature',
            'Care Instructions': 'Wash with mild detergent, do not bleach, dry in shade',
            Sizes: 'SL,M,L,XL,XXL,XXL',
            'Made in ': 'India'
          },
          description:
            'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
        }
      ];
      this.products = this.productitems;
    }, 1000);
  }
  onFilter(event: any) {
    if (event === 'low') {
      this.products.sort((a, b) => a.price - b.price);
    } else if (event === 'high') {
      this.products.sort((a, b) => b.price - a.price);
    } else {
      this.products.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  onInputChanged(input: string) {
    this.dimmed = true;
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.dimmed = false;
      this.products = this.productitems.filter((items) => {
        return items.name.toLowerCase().includes(input.toLowerCase());
      });
    }, 2000);
  }
}
