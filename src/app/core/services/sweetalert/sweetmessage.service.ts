import { Injectable } from '@angular/core';
import swal2 from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class SweetmessageService {
  constructor() {}
  info(message: string) {
    swal2.fire({
      text: message,
      timer: 2000,
      icon: 'info'
    });
  }

  success(message: string) {
    swal2.fire({
      text: message,
      timer: 2000,
      icon: 'success'
    });
  }

  warn(message: string) {
    console.log(message);
    swal2.fire({
      text: message,
      timer: 2000,
      icon: 'warning'
    });
  }

  error(message: string) {
    swal2.fire({
      text: message,
      timer: 2000,
      icon: 'error'
    });
  }
}
