import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {

  let themeservice: ThemeService;
  let httpTestingController: HttTestingController
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpTestingController],
    providers: [ThemeService]
  }));
  themeservice = TestBed.get(themeservice);
  httpTestingController = TestBed.get(HttpTestingController);

  it('should be get the theme', () => {
   themeservice.getTheme().subscribe();

   let themerequest : TestRequest = httpTestingController.expectOne();
  });
});
