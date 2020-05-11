import { Component, Input, ViewEncapsulation } from '@angular/core';
import { delay, finalize, map, take, tap, withLatestFrom } from 'rxjs/operators';
import { LoadingBarService } from './loading-bar.service';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent {
  @Input() includeSpinner = false;
  @Input() includeBar = true;
  @Input() fixed = true;
  @Input() color;
  @Input() height;
  @Input() diameter;
  @Input() value = null;

  constructor(public loader: LoadingBarService) {}
}
