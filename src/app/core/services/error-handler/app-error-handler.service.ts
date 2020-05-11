import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';

import { NOTIFICATION } from '@core/api/names';
import { NotificationService } from '../notification/notification.service';

/** Application-wide error handler that adds a UI notification to the error handling
 * provided by the default Angular ErrorHandler.
 */
@Injectable()
export class AppErrorHandler extends ErrorHandler {
  constructor(private notificationsService: NotificationService) {
    super();
  }

  handleError(error: Error | HttpErrorResponse) {
    let displayMessage = `${NOTIFICATION.An_error_occurred}`;

    if (!environment.production) {
      displayMessage += ' See console for details.';
    }

    this.notificationsService.error(displayMessage);

    super.handleError(error);
  }
}
