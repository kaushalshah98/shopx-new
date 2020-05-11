import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NOTIFICATION } from '@core/api/names';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { User } from '@shared/interfaces';
import { UserManagementService } from '../user-service/user-management.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;
  selectedimage: string;

  constructor(
    private formBuilder: FormBuilder,
    public property: PropertyAccessService,
    private userservice: UserManagementService,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    this.initializeform();
  }
  initializeform() {
    this.registerform = this.formBuilder.group({
      usernameFormControl: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]
      ],
      passwordFormControl: ['', [Validators.required, Validators.minLength(4)]],
      emailFormControl: ['', [Validators.required, Validators.email]],
      photoFormControl: ['', [Validators.required]]
    });
  }
  register() {
    const userdata: User = {
      // name: btoa(this.registerform.controls.usernameFormControl.value),
      // password: btoa(this.registerform.controls.passwordFormControl.value),
      // email: btoa(this.registerform.controls.emailFormControl.value),
      // profilepic: btoa(this.registerform.controls.photoFormControl.value),
      // status: true,
      name: this.registerform.controls.usernameFormControl.value,
      password: this.registerform.controls.passwordFormControl.value,
      email: this.registerform.controls.emailFormControl.value,
      profilepic: this.registerform.controls.photoFormControl.value,
      status: true
    };
    this.userservice.createuser(userdata).subscribe(
      (res) => res,
      (error: HttpErrorResponse) => {
        console.log(error);
        this.notification.error(error.message);
      },
      () => {
        this.notification.success(`${NOTIFICATION.Your_Profile_Has_been_Registered_Successfully}`);
        this.notification.success(`${NOTIFICATION.Check_Your_Email}`);
      }
    );
  }
  onImageSelected(event) {
    const file: File = event.target.files[0];
    const Reader = new FileReader();
    Reader.onload = (res: any) => {
      this.selectedimage = res.target.result;
    };
    Reader.readAsDataURL(file);
  }
  public hasError(controlName: string, errorName: string) {
    return this.registerform.controls[controlName].hasError(errorName);
  }
}
