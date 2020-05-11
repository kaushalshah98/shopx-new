import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable()
export class ConfirmDialogService {
  constructor(private dialog: MatDialog) {}

  showConfirmDialog(msg: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '25%',
      data: {
        message: msg
      }
    });
    return dialogRef.afterClosed();
  }
}
