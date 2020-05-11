import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NOTIFICATION } from '@core/api/names';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { Subject } from 'rxjs';
import { AdminManagementService } from '../../admin-service/admin-management.service';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.scss']
})
export class BlockUserComponent implements OnInit {
  userid: string;
  isDisabled = true;
  heightt: number;
  themestatus: boolean;
  constructor(
    public property: PropertyAccessService,
    private adminservice: AdminManagementService,
    private notification: NotificationService
  ) {}

  ngOnInit() {}

  onBlockUser() {
    const status = { status: false };
    this.adminservice.blockuser(status, this.userid).subscribe(
      (res) => res,
      (error: HttpErrorResponse) => this.notification.error(error.message),
      () => this.notification.success(`${NOTIFICATION.User_has_been_blocked}`)
    );
  }
  onInputChanged(input: string) {
    if (input === null || input === '') {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
    this.userid = input;
  }
}
