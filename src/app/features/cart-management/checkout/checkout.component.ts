import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  isLinear = true;
  heading = 'CHECKOUT-FORM';
  step1 = false;
  step2 = false;
  paddingtop: BehaviorSubject<number> = new BehaviorSubject(20);
  @ViewChild('stepper', { static: false }) stepper: MatStepper;

  constructor(public property: PropertyAccessService) {}

  ngOnInit() {}
  setstep1status(event) {
    this.step1 = event;
    if (this.step1) {
      this.stepper.next();
    }
  }
  setstep2status(event) {
    this.step2 = event;
  }

  fullscreenstatus(event) {
    if (event) {
      this.paddingtop.next(80);
    } else {
      this.paddingtop.next(20);
    }
  }
}
