import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CONFIRM, NOTIFICATION } from '@core/api/names';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { ProductItem } from '@shared/interfaces';
import { ProductManagementService } from 'src/app/features/product-management/product-service/product-management.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class ViewProductsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  dataSource = new MatTableDataSource<ProductItem>();
  pageSizeOptions: number[] = [10, 20, 50, 100];
  columnsToDisplay = ['image', 'name', 'quantity', 'price', 'action'];
  expandedElement: any;
  selectedStatus = 'ALL';
  productlist: ProductItem[];
  themestatus: boolean;
  category = [
    { name: 'ALL' },
    { name: 'Electronics' },
    { name: 'Mobile' },
    { name: 'MensFashion' },
    { name: 'WomensFashion' }
  ];
  dimmed: boolean;
  constructor(
    public property: PropertyAccessService,
    private router: Router,
    private productservice: ProductManagementService,
    private notification: NotificationService,
    private dialog: ConfirmDialogService
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.fetchproducts();
  }
  fetchproducts() {
    this.dataLoading.emit(true);
    this.dimmed = true;
    setTimeout(() => {
      this.productservice.fetchallproducts().subscribe(
        (res) => {
          if (res === null || res === undefined) {
            this.notification.warning(`${NOTIFICATION.Check_Your_Network}`);
            this.notification.info(`${NOTIFICATION.Try_to_reload_the_page}`);
          } else {
            this.productlist = res;
            this.dataSource.data = res;
          }
        },
        (error: HttpErrorResponse) => {
          this.dataLoading.emit(false);
          console.log(error);
          this.dimmed = false;
          this.notification.error(error.message);
        },
        () => {
          this.dimmed = false;
          this.dataLoading.emit(false);
        }
      );
    }, 3000);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  updateProduct(product: ProductItem) {
    this.router.navigateByUrl('/admin/update', { state: { productid: product.product_id } });
  }
  removeProduct(product: ProductItem) {
    this.dimmed = true;
    this.dialog
      .showConfirmDialog(`${CONFIRM.are_you_sure_want_to_remove_product}`)
      .subscribe((result) => {
        if (result === 'yes') {
          this.productservice.deleteproduct(product.product_id).subscribe(
            (res) => res,
            (error: HttpErrorResponse) => {
              this.dataLoading.emit(false);
              this.dimmed = false;
              this.notification.error(error.message);
            },
            () => {
              this.dimmed = false;
              this.fetchproducts();
              this.notification.success(`${NOTIFICATION.Product_Has_been_Removed}`);
            }
          );
        }
      });
  }
  sortchanged(category) {
    switch (category) {
      case 'ALL':
        this.dataSource.data = this.productlist;
        break;
      case 'MensFashion':
        this.dataSource.data = this.productlist.filter((item) => item.category === 'MensFashion');
        break;
      case 'WomensFashion':
        this.dataSource.data = this.productlist.filter((item) => item.category === 'WomensFashion');
        break;
      case 'Electronics':
        this.dataSource.data = this.productlist.filter((item) => item.category === 'Electronics');
        break;
      case 'Mobile':
        this.dataSource.data = this.productlist.filter((item) => item.category === 'Mobile');
        break;
    }
  }
}
