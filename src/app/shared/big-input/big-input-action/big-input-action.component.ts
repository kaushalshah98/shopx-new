import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-big-input-action',
  templateUrl: './big-input-action.component.html',
  styleUrls: ['./big-input-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigInputActionComponent {
  @Input()
  disabled = false;
  @Input()
  iconname = '';
  @Input()
  label = '';
  @Input()
  color = '';

  @Output()
  action = new EventEmitter<void>();

  hasFocus = false;
  constructor(public property: PropertyAccessService) {}
  onClick() {
    this.action.emit();
  }
}
