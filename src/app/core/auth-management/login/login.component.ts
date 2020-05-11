import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NOTIFICATION } from '@core/api/names';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialUser
} from 'ng4-social-login';
import { UserManagementService } from 'src/app/features/user-management/user-service/user-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public user: SocialUser;
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  loginform: FormGroup;
  show = false;
  constructor(
    private socialAuthService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    public property: PropertyAccessService,
    private userservice: UserManagementService,
    private notification: NotificationService,
    private storage: LocalStorageService
  ) {}

  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.loginform = this.formBuilder.group({
      usernameFormControl: ['', [Validators.required, Validators.minLength(3)]],
      passwordFormControl: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  public hasError(controlName: string, errorName: string) {
    return this.loginform.controls[controlName].hasError(errorName);
  }
  login() {
    this.showloader();
    const userdata = {
      // username: btoa(this.loginform.controls.usernameFormControl.value),
      // password: btoa(this.loginform.controls.passwordFormControl.value)
      name: this.loginform.controls.usernameFormControl.value,
      password: this.loginform.controls.passwordFormControl.value
    };
    setTimeout(() => {
      this.userservice.verifyuser(userdata).subscribe(
        (res) => {
          if (res.length <= 0) {
            this.property.isloggedin.next(true);
            this.notification.error(`${NOTIFICATION.Incorrect_Username_or_Password}`);
          } else if (res.status === false) {
            this.notification.error(`${NOTIFICATION.Your_Account_Has_been_Blocked}`);
          } else {
            this.userservice.setUserId(res.userid);
            this.storage.setItem('USER', res);
            this.storage.setItem('LOGGEDIN', true);
            this.notification.success(`${NOTIFICATION.Login_Success}`);
            this.property.nightmode.next(res.night_theme);
            if (res.role === 'user') {
              this.router.navigate(['home']);
            } else {
              this.router.navigate(['admin']);
            }
          }
        },
        (error: HttpErrorResponse) => {
          this.hideloader();
          console.log(error);
          this.notification.error(error.message);
        },
        () => {
          this.hideloader();
        }
      );
    }, 2000);
  }
  showloader() {
    this.dataLoading.emit(true);
    this.show = true;
  }
  hideloader() {
    this.dataLoading.emit(false);
    this.show = false;
  }
  loginWithFacebook() {
    this.showloader();
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => {
      const userdata = {
        name: user.name,
        password: '',
        email: user.email,
        profilepic: user.photoUrl,
        status: true
      };
      this.userservice.createuser(userdata).subscribe(
        (res) => res,
        (error: HttpErrorResponse) => {
          this.hideloader();
          console.log(error);
          this.notification.error(error.message);
        },
        () => {
          this.hideloader();
          this.notification.success(
            `${NOTIFICATION.Your_Facebook_Account_has_been_found_successfully}`
          );
          this.notification.success(`${NOTIFICATION.Check_Your_Email}`);
          this.router.navigate(['home']);
        }
      );
    });
  }
  loginWithGoogle() {
    this.showloader();
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      const userdata = {
        name: user.name,
        password: '',
        email: user.email,
        profilepic: user.photoUrl,
        status: true
      };
      this.userservice.createuser(userdata).subscribe(
        (res) => res,
        (error: HttpErrorResponse) => {
          this.hideloader();
          console.log(error);
          this.notification.error(error.message);
        },
        () => {
          this.hideloader();
          this.notification.success(
            `${NOTIFICATION.Your_Google_Account_has_been_found_successfully}`
          );
          this.notification.success(`${NOTIFICATION.Check_Your_Email}`);
          this.router.navigate(['home']);
        }
      );
    });
  }
}
