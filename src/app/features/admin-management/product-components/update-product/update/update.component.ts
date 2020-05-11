import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CONFIRM, NOTIFICATION } from '@core/api/names';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { ProductItem } from '@shared/interfaces';
import { map } from 'rxjs/operators';
import { ProductManagementService } from 'src/app/features/product-management/product-service/product-management.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, AfterViewInit {
  state$: any;
  productdata: ProductItem;
  dataLoading: EventEmitter<boolean> = new EventEmitter(true);
  productid: string;
  constructor(
    private dialog: ConfirmDialogService,
    private activateRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    public property: PropertyAccessService,
    private productservice: ProductManagementService,
    private notification: NotificationService
  ) {}
  category = [
    { name: 'Electronics' },
    { name: 'Mobile' },
    { name: 'MensFashion' },
    { name: 'WomensFashion' }
  ];
  InnerCategory = [
    { name: 'Accessories' },
    { name: 'Tablets' },
    { name: 'Smartphones' },
    { name: 'T-shirts' },
    { name: 'Shirt' },
    { name: 'Shoes' },
    { name: 'Goggles' },
    { name: 'TV' },
    { name: 'Laptop' },
    { name: 'Headphones' },
    { name: 'Saree' },
    { name: 'Dress' },
    { name: 'Shoes' },
    { name: 'Watch' },
    { name: 'Nightwear' }
  ];
  updateproductform: FormGroup;

  ngAfterViewInit() {
    // this.dataLoading.emit(false);
  }
  ngOnInit() {
    this.initializeform();
    this.state$ = this.activateRouter.paramMap
      .pipe(map(() => window.history.state))
      .subscribe((res) => (this.productid = res.productid));
    this.fetchproduct();
  }
  fetchproduct() {
    this.dataLoading.emit(true);
    this.productservice.getproduct(this.productid).subscribe(
      (res) => {
        if (res === null || res === undefined) {
          this.notification.warning(`${NOTIFICATION.Check_Your_Network}`);
          this.notification.info(`${NOTIFICATION.Try_to_reload_the_page}`);
        } else {
          this.productdata = res;
        }
      },
      (error: HttpErrorResponse) => {
        this.dataLoading.emit(false);
        this.notification.error(error.message);
      },
      () => this.dataLoading.emit(false)
    );
  }
  initializeform() {
    this.updateproductform = this.formBuilder.group({
      selectedcategory: ['', [Validators.required]],
      selectedinnerCategory: ['', [Validators.required]],
      productNameFormControl: ['', [Validators.required]],
      quantityFormControl: [
        '',
        [Validators.required, Validators.pattern('[0-9]*'), Validators.min(1)]
      ],
      priceFormControl: [
        '',
        [Validators.required, Validators.pattern('[0-9]*'), Validators.min(1)]
      ],
      productDescriptionFormControl: ['', [Validators.required, Validators.minLength(10)]],
      productImage1FormControl: ['', [Validators.required]],
      productImage2FormControl: [''],
      productImage3FormControl: ['']
    });
  }
  public hasError(controlName: string, errorName: string) {
    return this.updateproductform.controls[controlName].hasError(errorName);
  }
  cancel() {
    if (this.updateproductform.touched) {
      this.dialog.showConfirmDialog(`${CONFIRM.are_you_sure}`).subscribe((result) => {
        if (result === 'yes') {
          this.updateproductform.reset();
        }
      });
    }
  }
  UpdateProduct() {
    this.dataLoading.emit(true);
    const product = {
      name: this.updateproductform.controls.productNameFormControl.value,
      description: this.updateproductform.controls.productDescriptionFormControl.value,
      quantity: this.updateproductform.controls.quantityFormControl.value,
      price: this.updateproductform.controls.priceFormControl.value,
      category: this.updateproductform.controls.selectedcategory.value,
      innercategory: this.updateproductform.controls.selectedinnerCategory.value,
      image: [
        {
          imageurl: this.updateproductform.controls.productImage1FormControl.value
        },
        {
          imageurl:
            this.updateproductform.controls.productImage2FormControl.value ||
            'https://bhmlib.org/wp-content/themes/cosimo-pro/images/no-image-box.png'
        },
        {
          imageurl:
            this.updateproductform.controls.productImage3FormControl.value ||
            'https://bhmlib.org/wp-content/themes/cosimo-pro/images/no-image-box.png'
        }
      ],
      details: {
        Comfort: 'Fashionably cotton',
        Fitting: 'Fitting type is slim fit',
        Ocassion: 'Casual',
        Quality:
          'All garments are subjected to the following tests fabric dimensional stability test and print quality inspection for colors and wash fastness Light weight fabric sweeps sweat away from your skin and helps regulate body temperature',
        'Care Instructions': 'Wash with mild detergent, do not bleach, dry in shade',
        Sizes: 'SL,M,L,XL,XXL,XXL',
        'Made in': 'India'
      }
    };
    this.productservice.updateproduct(this.productid, product).subscribe(
      (res) => res,
      (error: HttpErrorResponse) => {
        this.dataLoading.emit(false);
        this.notification.error(error.message);
      },
      () => {
        this.dataLoading.emit(false);
        this.notification.success(`${NOTIFICATION.Product_Has_been_Updated}`);
      }
    );
  }
}
