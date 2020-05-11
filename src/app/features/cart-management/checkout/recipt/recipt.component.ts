import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { NOTIFICATION } from '@core/api/names';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { CartItem } from '@shared/interfaces';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { CartManagementService } from '../../cart-service/cart-management.service';
@Component({
  selector: 'app-recipt',
  templateUrl: './recipt.component.html',
  styleUrls: ['./recipt.component.scss']
})
export class ReciptComponent implements OnInit {
  cartitems: any[];
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  totalprice = 0;
  dimmed = false;
  displayedColumns: string[] = ['image', 'name', 'quantity', 'price'];
  dataSource = new MatTableDataSource<CartItem>();
  todaydate: Date;
  data: object;
  constructor(
    public property: PropertyAccessService,
    private cartservice: CartManagementService,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    this.initializeCart();
    this.property.details.subscribe((res) => {
      this.data = res;
    });
    this.todaydate = new Date();
  }
  initializeCart() {
    this.dimmed = true;
    this.dataLoading.emit(true);
    setTimeout(async () => {
      await this.cartservice
        .getCartItems()
        .then((res) => {
          if (res === null || res === undefined) {
            this.notification.warning(`${NOTIFICATION.Check_Your_Network}`);
            this.notification.info(`${NOTIFICATION.Try_to_reload_the_page}`);
          } else {
            this.dataSource.data = res;
            this.getTotalCost();
          }
        })
        .catch((error) => {
          console.log(error);
          this.notification.error(error.message);
        })
        .finally(() => {
          this.dimmed = false;
          this.dataLoading.emit(false);
        });
    }, 1000);
  }
  getTotalCost() {
    this.totalprice = this.dataSource.data
      .map((t) => t.price * t.qty)
      .reduce((acc, value) => acc + value, 0);
  }
  downloadPdf() {
    const data = document.getElementById('recipt');
    html2canvas(data, {
      scrollY: -window.scrollY,
      backgroundColor: '#ffffff'
    }).then((canvas) => {
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('l', 'mm', 'a4'); // Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 20, 10, 250, 200);
      pdf.save('recipt.pdf');
    });
  }
  downloadImage() {
    const data = document.getElementById('recipt');
    html2canvas(data, {
      scrollY: -window.scrollY,
      backgroundColor: '#ffffff'
    }).then((canvas) => {
      const link = document.createElement('a');
      document.body.appendChild(link);
      link.download = 'recipt.png';
      link.href = canvas.toDataURL('image/png');
      link.target = '_blank';
      link.click();
    });
  }
}
