import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

/**
 * Provides an abstract wrapper around showing a MatSnackbar
 * notification based on global environment or API provided
 * configuration.
 *
 * This class Listens for the authentication state to change.
 * Once the state becomes authenticated, retrieve the startup
 * configuration from the API service. Once de-authenticated
 * set the _params to undefined and unsubscribe.
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  /**
   * Constructor
   * @param toast  Toaster
   */
  constructor(private toastr: ToastrService, private translate: TranslateService) { }

  show(message: string) {
    this.translate.get(message).subscribe((res: string) => {
      console.log(res);
      return this.toastr.success(res);
    });
  }
  success(message: string) {
    this.translate.get(message).subscribe((res: string) => {
      console.log(res);
      return this.toastr.success(res, 'Success');
    });
  }
  error(message: string) {
    return this.toastr.error(message, 'Error');
  }
  warning(message: string) {
    this.translate.get(message).subscribe((res: string) => {
      console.log(res);
      return this.toastr.warning(res, 'Warning');
    });
  }
  info(message: string) {
    this.translate.get(message).subscribe((res: string) => {
      console.log(res);
      return this.toastr.info(res, 'Information');
    });
  }
}
