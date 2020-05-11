import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIRM, NOTIFICATION } from '@core/api/names';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { ProductManagementService } from 'src/app/features/product-management/product-service/product-management.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, AfterViewInit {
  isDisabled = true;
  dataLoading: EventEmitter<boolean> = new EventEmitter(true);
  constructor(
    private dialog: ConfirmDialogService,
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
  InnerCategory = [];
  addproductform: FormGroup;
  themestatus: boolean;

  ngAfterViewInit() {
    this.dataLoading.emit(false);
  }
  ngOnInit() {
    this.property.nightmode.subscribe((res) => (this.themestatus = res));
    this.initializeform();
  }
  initializeform() {
    this.addproductform = this.formBuilder.group({
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
    return this.addproductform.controls[controlName].hasError(errorName);
  }
  cancel() {
    if (this.addproductform.touched) {
      this.dialog.showConfirmDialog(`${CONFIRM.are_you_sure}`).subscribe((result) => {
        if (result === 'yes') {
          this.addproductform.reset();
        }
      });
    }
  }
  onCategorySelect(event) {
    this.isDisabled = false;
    this.addproductform.controls.selectedinnerCategory.reset();
    switch (event.value) {
      case 'Electronics':
        this.InnerCategory = [{ name: 'TV' }, { name: 'Laptop' }, { name: 'Headphones' }];
        break;
      case 'Mobile':
        this.InnerCategory = [
          { name: 'Accessories' },
          { name: 'Tablets' },
          { name: 'Smartphones' }
        ];
        break;
      case 'MensFashion':
        this.InnerCategory = [
          { name: 'T-shirts' },
          { name: 'Shirts' },
          { name: 'Shoes' },
          { name: 'Goggles' }
        ];
        break;
      case 'WomensFashion':
        this.InnerCategory = [
          { name: 'Saree' },
          { name: 'Dress' },
          { name: 'Shoes' },
          { name: 'Watch' },
          { name: 'Nightwear' }
        ];
        break;
    }
  }
  AddProduct() {
    this.dataLoading.emit(true);
    const product = {
      name: this.addproductform.controls.productNameFormControl.value,
      description: this.addproductform.controls.productDescriptionFormControl.value,
      quantity: this.addproductform.controls.quantityFormControl.value,
      price: this.addproductform.controls.priceFormControl.value,
      category: this.addproductform.controls.selectedcategory.value,
      innercategory: this.addproductform.controls.selectedinnerCategory.value,
      image: [
        {
          imageurl: this.addproductform.controls.productImage1FormControl.value
        },
        {
          imageurl:
            this.addproductform.controls.productImage2FormControl.value ||
            'https://bhmlib.org/wp-content/themes/cosimo-pro/images/no-image-box.png'
        },
        {
          imageurl:
            this.addproductform.controls.productImage3FormControl.value ||
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
    this.productservice.addproduct(product).subscribe(
      (res) => res,
      (error: HttpErrorResponse) => {
        this.dataLoading.emit(false);
        console.log(error);
        this.notification.error(error.message);
      },
      () => {
        this.notification.success(`${NOTIFICATION.Product_is_added_successfully}`);
        this.dataLoading.emit(false);
      }
    );
  }
}
