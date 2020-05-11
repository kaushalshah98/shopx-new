import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  showLoader = true;
  @Input() loading: BehaviorSubject<boolean>;

  constructor() {}

  ngOnInit() {
    this.loading.subscribe((flag: boolean) => {
      this.showLoader = flag;
    });
  }
}
