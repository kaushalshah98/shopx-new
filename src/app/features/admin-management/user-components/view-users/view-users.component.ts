import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { NOTIFICATION } from '@core/api/names';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { User, TrackError } from '@shared/interfaces';
import { AdminManagementService } from '../../admin-service/admin-management.service';
import { UsersResolverService } from './users-resolver.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  dataLoading: EventEmitter<boolean> = new EventEmitter(true);
  dataSource = new MatTableDataSource<User>();
  pageSizeOptions: number[] = [10, 20, 50, 100];
  columnsToDisplay = ['status', 'profilepic', 'name', 'email', 'action'];
  message: string;
  userlist: User[];
  selectedStatus = 'ALL';
  status = [{ name: 'ALL' }, { name: 'UnBlocked Users' }, { name: 'Blocked Users' }];
  dimmed: boolean;
  constructor(
    public property: PropertyAccessService,
    private adminservice: AdminManagementService,
    private notification: NotificationService,
    private resolveservice: UsersResolverService,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit() {
    this.dataLoading.emit(false);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.fetchusers();
  }
  fetchusers() {
    // this.dataLoading.emit(true);
    // this.dimmed = true;
    // setTimeout(() => {
      let resolvelist: User[] | TrackError = this.route.snapshot.data['resolvedUsers'];
      if (resolvelist instanceof TrackError) {
        console.log(`Error message is ${resolvelist.friendlymessage}`);
      } else {
        this.userlist = resolvelist;
        this.dataSource.data = resolvelist;
      }
      // this.adminservice.getusers().subscribe(
      //   (res: User[]) => {
      //     if (res === null || res === undefined) {
      //       this.notification.warning(`${NOTIFICATION.Check_Your_Network}`);
      //       this.notification.info(`${NOTIFICATION.Try_to_reload_the_page}`);
      //     } else {
      //       this.userlist = res;
      //       this.dataSource.data = res;
      //     }
      //   },
      //   (error: TrackError) => {
      //     this.dataLoading.emit(false);
      //     console.log(error);
      //     this.dimmed = false;
      //     this.notification.error(error.friendlymessage);
      //   },
      //   () => {
      //     this.dimmed = false;
      //     this.dataLoading.emit(false);
      //   }
      // );
    // }, 3000);
  }
  blockuser(userdata: User) {
    this.dataLoading.emit(true);
    this.dimmed = true;
    const status = { status: !userdata.status };
    if (userdata.status) {
      this.message = `${NOTIFICATION.User_has_been_blocked}`;
    } else {
      this.message = `${NOTIFICATION.User_has_been_unblocked}`;
    }
    this.adminservice.blockuser(status, userdata.userid).subscribe(
      (res) => res,
      (error: HttpErrorResponse) => {
        this.dataLoading.emit(false);
        this.dimmed = false;
        this.notification.error(error.message);
      },
      () => {
        this.fetchusers();
        this.notification.success(this.message);
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  statusChanged(status) {
    switch (status) {
      case 'ALL':
        this.dataSource.data = this.userlist;
        break;
      case 'UnBlocked Users':
        this.dataSource.data = this.userlist.filter((item) => item.status === true);
        break;
      case 'Blocked Users':
        this.dataSource.data = this.userlist.filter((item) => item.status === false);
        break;
    }
  }
}
