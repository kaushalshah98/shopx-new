import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CONFIRM, NOTIFICATION } from '@core/api/names';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ThemeService } from '@services/theme-service/theme.service';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { CartManagementService } from 'src/app/features/cart-management/cart-service/cart-management.service';
import { UserManagementService } from 'src/app/features/user-management/user-service/user-management.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  @Input() siteLeftPanel: MatSidenav;
  @Input() isHidden = false;
  @Input() isAdmin = false;
  @Output() IsNightmode = new EventEmitter<boolean>();
  @Output() IsFullscreen = new EventEmitter<boolean>();

  username: string;
  elem;
  data: any;
  isadmin = false;
  value: boolean;
  currentLanguage: string;
  optionmenu: any;
  constructor(
    private router: Router,
    private dialog: ConfirmDialogService,
    public translate: TranslateService,
    private notification: NotificationService,
    @Inject(DOCUMENT) private document: any,
    public property: PropertyAccessService,
    private storage: LocalStorageService,
    private theme: ThemeService,
    private cartservice: CartManagementService
  ) {
    this.data = storage.getItem('USER');
    if (this.data && this.data.role === 'admin') {
      this.isadmin = true;
    }
    translate.addLangs(['en', 'fr', 'sk', 'es']);
    translate.setDefaultLang('en');

    const browserlang = translate.getBrowserLang();
    this.currentLanguage = browserlang;
    translate.use(browserlang.match(/en|fr/) ? browserlang : 'en');
  }
  userdetails;
  login_status: string;

  ngOnInit() {
    this.elem = document.documentElement;
    this.getmenu();
    if (this.data) {
      this.initializeTheme();
      this.fetchCartSize();
    }
  }
  async fetchCartSize() {
    if (this.data) {
      await this.cartservice
        .getCartSize()
        .then((res) => {
          if (res === null || res === undefined) {
            this.notification.warning(`${NOTIFICATION.Check_Your_Network}`);
            this.notification.info(`${NOTIFICATION.Try_to_reload_the_page}`);
          } else {
            this.property.cartsize.next(res.cartsize);
          }
        })
        .catch((error) => {
          console.log(error);
          this.notification.error(error.message);
        });
    }
  }
  initializeTheme() {
    if (this.data) {
      this.theme.getTheme().subscribe(
        (res) => {
          if (res === null || res === undefined) {
            this.notification.info(`${NOTIFICATION.Try_to_reload_the_page}`);
            this.notification.warning(`${NOTIFICATION.Check_Your_Network}`);
          } else {
            this.property.nightmode.next(res.night_theme);
            this.IsNightmode.emit(res.night_theme);
          }
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.notification.error(error.message);
        },
        () => { }
      );
    }
  }
  go_to_home() {
    if (this.data && this.data.role === 'admin') {
      this.router.navigateByUrl('/admin');
    } else {
      this.router.navigateByUrl('/home');
    }
  }
  getmenu() {
    if (this.data && this.data.role === 'admin') {
      this.optionmenu = [
        { name: 'nav_bar.menu.your_account', icon: 'account_circle', url: '/usersettings/profile' }
      ];
    } else {
      this.optionmenu = [
        { name: 'nav_bar.menu.your_account', icon: 'account_circle', url: '/usersettings/profile' },
        { name: 'nav_bar.menu.your_order', icon: 'assignment', url: '/usersettings/my_orders' },
        { name: 'nav_bar.menu.your_wishlist', icon: 'favorite', url: '/usersettings/wishlist' }
      ];
    }
  }
  route(url) {
    this.router.navigateByUrl(url);
  }
  goToCart() {
    this.router.navigate(['cart']);
  }
  getUserName() {
    if (this.data) {
      return this.data.name;
    } else {
      return 'Sign In';
    }
  }
  onLanguageSelect(language) {
    this.translate.use(language);
    this.currentLanguage = language;
    this.notification.info(`${NOTIFICATION.Selected_Language_is} ${language}`);
  }
  getLoginStatus() {
    if (this.data) {
      return 'nav_bar.menu.logout';
    }
    return 'nav_bar.menu.login';
  }
  logout() {
    if (this.getLoginStatus() === 'nav_bar.menu.login') {
      this.router.navigate(['login']);
    } else {
      this.dialog
        .showConfirmDialog(`${CONFIRM.are_you_sure_want_to_logout}`)
        .subscribe((result) => {
          if (result === 'yes') {
            localStorage.clear();
            this.router.navigate(['login']);
          }
        });
    }
  }
  getText() {
    return this.property.fullscreen ? 'fullscreen_exit' : 'fullscreen';
  }
  configureFullscreen() {
    this.property.fullscreen = !this.property.fullscreen;
    if (!this.property.fullscreen) {
      this.IsFullscreen.emit(false);
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        this.document.msExitFullscreen();
      }
    } else {
      this.IsFullscreen.emit(true);
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        this.elem.msRequestFullscreen();
      }
    }
  }
  onThemeChange(status) {
    const night_theme = { night_theme: status };
    if (!this.property.isloggedin.value) {
      this.property.nightmode.next(status);
      this.IsNightmode.emit(status);
      this.notification.success(`${NOTIFICATION.Theme_Changed}`);
    } else {
      this.theme.changeTheme(night_theme).subscribe(
        (res) => res,
        (error: HttpErrorResponse) => {
          console.log(error);
          this.notification.error(error.message);
        },
        () => {
          this.property.nightmode.next(status);
          this.IsNightmode.emit(status);
          this.notification.success(`${NOTIFICATION.Theme_Changed}`);
        }
      );
    }
  }
  contact() {
    this.router.navigateByUrl('/contactus');
  }
}
