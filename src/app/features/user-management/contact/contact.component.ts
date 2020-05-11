import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NOTIFICATION } from '@core/api/names';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { UserManagementService } from '../user-service/user-management.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  subject = [
    { name: 'user.form.subject.complaint' },
    { name: 'user.form.subject.feature_request' },
    { name: 'user.form.subject.bug_report' },
    { name: 'user.form.subject.feedback' }
  ];
  contactform: FormGroup;
  padding = 40;
  dataLoading: EventEmitter<boolean> = new EventEmitter(true);

  constructor(
    private formBuilder: FormBuilder,
    public property: PropertyAccessService,
    private userservice: UserManagementService,
    private notification: NotificationService
  ) {}

  ngAfterViewInit() {
    this.dataLoading.emit(false);
  }
  ngOnInit() {
    this.fullscreenstatus(this.property.fullscreen);
    this.initializeform();
  }
  initializeform() {
    this.contactform = this.formBuilder.group({
      // usernameFormControl: ['', [Validators.required]],
      messageFormControl: ['', [Validators.required]],
      // emailFormControl: ['', [Validators.required, Validators.email]],
      subjectFormControl: ['', [Validators.required]]
    });
  }
  contact() {
    this.dataLoading.emit(true);
    const data = {
      message: this.contactform.controls.messageFormControl.value,
      subject: this.contactform.controls.subjectFormControl.value
    };
    this.userservice.sendmessage(data).subscribe(
      (res) => {},
      (error: HttpErrorResponse) => {
        console.log(error);
        this.dataLoading.emit(false);
        this.notification.error(error.message);
      },
      () => {
        this.contactform.reset();
        this.dataLoading.emit(false);
        this.notification.success(`${NOTIFICATION.message_has_been_sent}`);
      }
    );
  }
  public hasError(controlName: string, errorName: string) {
    return this.contactform.controls[controlName].hasError(errorName);
  }
  fullscreenstatus(event) {
    if (event) {
      this.padding = 100;
    } else {
      this.padding = 40;
    }
  }
}
