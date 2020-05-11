import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NOTIFICATION } from '@core/api/names';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { UserManagementService } from '../user-service/user-management.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, AfterViewInit {
  forgotpasswordform: FormGroup;
  dataLoading: EventEmitter<boolean> = new EventEmitter(true);
  show = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public property: PropertyAccessService,
    private userservice: UserManagementService,
    private notification: NotificationService
  ) {}

  ngAfterViewInit() {
    this.dataLoading.emit(false);
  }
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.forgotpasswordform = this.formBuilder.group({
      usernameFormControl: ['', [Validators.required, Validators.minLength(3)]],
      emailFormControl: ['', [Validators.required, Validators.email]]
    });
  }
  public hasError(controlName: string, errorName: string) {
    return this.forgotpasswordform.controls[controlName].hasError(errorName);
  }
  send() {
    this.dataLoading.emit(true);
    const userdata = {
      name: this.forgotpasswordform.controls.usernameFormControl.value,
      email: this.forgotpasswordform.controls.emailFormControl.value
    };
    this.userservice.forgotpassword(userdata).subscribe(
      (res) => {
        if (res.length <= 0) {
          this.notification.warning(
            `${NOTIFICATION.Name_or_Email_you_entered_is_not_register_with_us}`
          );
          this.notification.warning(`${NOTIFICATION.Only_registered_users_can_get_password}`);
        } else {
          this.notification.success(`${NOTIFICATION.Your_Password_Has_been_Sent_to_Your_Email}`);
        }
      },
      (error: HttpErrorResponse) => {
        this.dataLoading.emit(false);
        console.log(error);
        this.notification.error(error.message);
      },
      () => {
        this.dataLoading.emit(false);
      }
    );
  }
}
