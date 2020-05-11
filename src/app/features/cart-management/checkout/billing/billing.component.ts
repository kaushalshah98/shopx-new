import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
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
  @Output() step1status = new EventEmitter<boolean>();
  @Input() paddingtop: BehaviorSubject<number>;
  padding: number;
  billingform: FormGroup;

  constructor(
    private myStepper: MatStepper,
    private formBuilder: FormBuilder,
    public property: PropertyAccessService
  ) {}

  ngOnInit() {
    this.initializeform();
  }
  initializeform() {
    this.billingform = this.formBuilder.group({
      nameFormControl: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]
      ],
      emailFormControl: ['', [Validators.required, Validators.email]],
      PincodeFormControl: [
        '',
        [Validators.required, Validators.maxLength(6), Validators.pattern('[0-9]*')]
      ],
      LastnameFormControl: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      address1FormControl: ['', [Validators.required]],
      selectedstate: ['', [Validators.required]],
      address2FormControl: [],
      selectedcountry: ['', [Validators.required]]
    });
  }
  public hasError(controlName: string, errorName: string) {
    return this.billingform.controls[controlName].hasError(errorName);
  }
  goForward() {
    if (this.billingform.status === 'VALID') {
      const billingdata = {
        state: this.billingform.controls.selectedstate.value,
        country: this.billingform.controls.selectedcountry.value,
        address: this.billingform.controls.address1FormControl.value
      };
      setTimeout(() => {
        this.moveforward();
      }, 500);
      this.property.details.next(billingdata);
      this.myStepper.next();
      this.step1status.emit(true);
    } else {
      this.step1status.emit(false);
    }
  }
  moveforward() {
    this.myStepper.next();
  }
}
