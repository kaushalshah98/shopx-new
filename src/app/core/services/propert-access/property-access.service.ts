import { Injectable } from '@angular/core';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyAccessService {
  public height = new BehaviorSubject<number>(405);
  public nightmode = new BehaviorSubject<boolean>(null);
  public fullscreen: boolean;
  public isloggedin = new BehaviorSubject<boolean>(null);
  public cartsize = new BehaviorSubject<number>(0);
  public details = new BehaviorSubject<object>(null);
  constructor(private storage: LocalStorageService) {
    if (this.storage.getItem('LOGGEDIN')) {
      this.isloggedin.next(true);
    }
  }
}
