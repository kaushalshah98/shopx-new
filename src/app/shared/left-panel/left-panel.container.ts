import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { RoleService } from '@services/role-service/role.service';
import { IMenu } from '@shared/interfaces';
import { UserManagementService } from 'src/app/features/user-management/user-service/user-management.service';
@Component({
  selector: 'app-left-panel-container',
  templateUrl: './left-panel.container.html',
  styleUrls: ['./left-panel.container.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LeftPanelContainer {
  @Input() menuItems: IMenu[];
  userdata: any;
  constructor(
    private userservice: UserManagementService,
    private role: RoleService,
    public property: PropertyAccessService
  ) {}
}
