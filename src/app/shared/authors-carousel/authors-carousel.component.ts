import { Component, OnInit } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { Author } from '@shared/interfaces';

@Component({
  selector: 'app-authors-carousel',
  templateUrl: './authors-carousel.component.html',
  styleUrls: ['./authors-carousel.component.scss']
})
export class AuthorsCarouselComponent implements OnInit {
  constructor(public property: PropertyAccessService) {}
  authors: Author[];
  ngOnInit() {
    this.authors = [
      {
        name: 'Manthan',
        image: 'https://pbs.twimg.com/profile_images/1241767505942765570/l4HANClJ_400x400.jpg',
        description: 'shared.authors.manthan_description',
        profession: 'shared.authors.manthan_profession'
      },
      {
        name: 'Vishal',
        image: 'https://miro.medium.com/max/2560/1*gBQxShAkxBp_YPb14CN0Nw.jpeg',
        description: 'shared.authors.vishal_description',
        profession: 'shared.authors.vishal_profession'
      },
      {
        name: 'Ramkrishna',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCFaLdbzz110T4h8nwK46aF45crydeYeygNf-EP_EtrqG2yReE&usqp=CAU',
        description: 'shared.authors.ramkrishna_description',
        profession: 'shared.authors.ramkrishna_profession'
      }
    ];
  }
}
