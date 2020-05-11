import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NOTIFICATION } from '@core/api/names';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { BuyList } from '@shared/interfaces';
import { BehaviorSubject } from 'rxjs';
import { BuyListService } from './buy-list.service';

@Component({
  selector: 'app-buy-list',
  templateUrl: './buy-list.component.html',
  styleUrls: ['./buy-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BuyListComponent implements OnInit {
  @Input() paddingtop: BehaviorSubject<number>;
  padding: number;
  dataLoading: EventEmitter<boolean> = new EventEmitter(true);
  isDisabled = true;
  isSelected = true;
  inputvalue = '';
  list: BuyList[] = [];
  buylist: BuyList[] = [];
  dimmed: boolean;
  constructor(
    public property: PropertyAccessService,
    private listservice: BuyListService,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    this.fetchbuylist();
  }
  fetchbuylist() {
    this.showspinner();
    this.listservice.getbuylist().subscribe(
      (res) => {
        if (res.length <= 0) {
          this.notification.info(`${NOTIFICATION.Your_List_is_Empty}`);
        } else if (res === undefined || res === null) {
          this.notification.warning(`${NOTIFICATION.Check_Your_Network}`);
          this.notification.info(`${NOTIFICATION.Try_to_reload_the_page}`);
        } else {
          this.list = res;
          this.buylist = this.list;
        }
      },
      (error: HttpErrorResponse) => {
        this.hidespinner();
        console.log(error);
        this.notification.error(error.message);
      },
      () => {
        this.hidespinner();
        this.check();
      }
    );
  }
  check() {
    this.isSelected = true;
    for (const item of this.buylist) {
      if (item.done === true) {
        this.isSelected = false;
      }
    }
  }
  onInputChanged(input: string) {
    this.inputvalue = input;
    if (input && input.length < 3) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }
  onAddToBuyList() {
    this.showspinner();
    setTimeout(() => {
      const item: BuyList = { name: this.inputvalue, done: false };
      this.buylist.push(item);
      this.onClear();
      this.listservice.addtolist(this.buylist).subscribe(
        (res) => (this.isSelected = true),
        (error: HttpErrorResponse) => {
          this.hidespinner();
          this.check();
          console.log(error);
          this.notification.error(error.message);
        },
        () => {
          this.notification.info(`${NOTIFICATION.is_added_to_the_list}`);
          this.hidespinner();
          this.fetchbuylist();
          this.check();
        }
      );
    }, 1000);
  }
  onClear() {
    this.inputvalue = '';
    this.isDisabled = true;
  }
  onToggleTodo(item: any) {
    item.done = !item.done;
    this.check();
  }
  onRemoveItem() {
    this.showspinner();
    setTimeout(() => {
      this.list = this.list.filter((item) => !item.done === true);
      this.listservice.addtolist(this.list).subscribe(
        (res) => (this.isSelected = true),
        (error: HttpErrorResponse) => {
          this.hidespinner();
          this.check();
          console.log(error);
          this.notification.error(error.message);
        },
        () => {
          this.notification.info(`${NOTIFICATION.Items_are_deleted}`);
          this.hidespinner();
          this.fetchbuylist();
          this.check();
        }
      );
    }, 1000);
  }
  hidespinner() {
    this.dimmed = false;
    this.dataLoading.emit(false);
  }
  showspinner() {
    this.dimmed = true;
    this.dataLoading.emit(true);
  }
  onFilter(filter: string) {
    switch (filter) {
      case 'ALL':
        this.buylist = this.list;
        break;
      case 'DONE':
        this.buylist = this.list.filter((item) => item.done === true);
        break;
      case 'ACTIVE':
        this.buylist = this.list.filter((item) => item.done === false);
        break;
    }
  }
}
