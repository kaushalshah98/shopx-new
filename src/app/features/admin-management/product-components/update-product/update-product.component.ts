import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  productid: string;
  isDisabled = true;
  heightt: number;
  themestatus: boolean;
  constructor(private router: Router, public property: PropertyAccessService) {}
  ngOnInit() {}
  onProductUpdate() {
    this.router.navigateByUrl('/admin/update', { state: { productid: this.productid } });
  }
  onInputChanged(input: string) {
    if (input === null || input === '') {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
    this.productid = input;
  }
}
