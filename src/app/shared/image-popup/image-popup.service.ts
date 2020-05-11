import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ImagePopupComponent } from './image-popup.component';

@Injectable()
export class ImagePopupService {
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(product): void {
    this.bottomSheet.open(ImagePopupComponent, {
      data: product
    });
  }
}
