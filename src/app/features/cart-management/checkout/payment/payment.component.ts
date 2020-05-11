import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { NOTIFICATION } from '@core/api/names';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { CartItem } from '@shared/interfaces';
import { BehaviorSubject } from 'rxjs';
import { CartManagementService } from '../../cart-service/cart-management.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179deg)'
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)'
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class PaymentComponent implements OnInit, AfterViewInit {
  code = 895;
  expiry = '09/06';
  cardnumber = 676767676767;
  dataLoading: EventEmitter<boolean> = new EventEmitter(true);
  name = 'Kaushal Shah';
  country = [
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' }
  ];
  state = [
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' }
  ];

  @Output() step2status = new EventEmitter<boolean>();
  flip = 'inactive';
  paymentform: FormGroup;
  @Input() paddingtop: BehaviorSubject<number>;
  padding: number;
  dimmed: boolean;
  order: any;

  constructor(
    private myStepper: MatStepper,
    private formBuilder: FormBuilder,
    public property: PropertyAccessService,
    private orderservice: OrderService,
    private notification: NotificationService,
    private cartservice: CartManagementService
  ) {}

  ngAfterViewInit() {
    this.dataLoading.emit(false);
  }
  ngOnInit() {
    this.initializeform();
    this.getorder();
  }
  getorder() {
    this.cartservice
      .getCartItems()
      .then((res) => {
        this.order = res.map(({ description, quantity, details, ...hi }) => hi);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  initializeform() {
    this.paymentform = this.formBuilder.group({
      nameFormControl: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      cvvFormControl: [
        '',
        [
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(3),
          Validators.pattern('[0-9]*')
        ]
      ],
      cardnumberFormControl: [
        '',
        [Validators.required, Validators.minLength(12), Validators.pattern('[0-9]*')]
      ],
      expiryFormControl: [
        '',
        [
          Validators.required,
          Validators.maxLength(5),
          Validators.minLength(5),
          Validators.pattern('[0-9 /]*')
        ]
      ]
    });
  }
  public hasError(controlName: string, errorName: string) {
    return this.paymentform.controls[controlName].hasError(errorName);
  }
  toggle() {
    this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
  }
  toggleFlip(status: boolean) {
    this.flip = status === true ? 'active' : 'inactive';
  }
  goForward() {
    if (this.paymentform.status === 'VALID') {
      this.dataLoading.emit(true);
      this.dimmed = true;
      setTimeout(() => {
        this.orderservice.addOrder(this.order).subscribe(
          (res) => res,
          (err: HttpErrorResponse) => {
            console.log(err);
            this.notification.error(err.message);
            this.dataLoading.emit(false);
            this.dimmed = false;
          },
          () => {
            this.dataLoading.emit(false);
            this.dimmed = false;
            setTimeout(() => {
              this.moveforward();
            }, 500);
            this.notification.success(`${NOTIFICATION.Order_Placed_Successfully}`);
            this.myStepper.next();
            this.step2status.emit(true);
          }
        );
      }, 3000);
    } else {
      this.step2status.emit(false);
    }
  }
  moveforward() {
    this.myStepper.next();
    this.step2status.emit(true);
  }
}
