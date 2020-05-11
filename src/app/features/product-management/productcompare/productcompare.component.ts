import { Component, EventEmitter, OnInit } from '@angular/core';
import { NOTIFICATION } from '@core/api/names';
import { ComparisonServiceService } from '@services/comparsion-service/comparison-service.service';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-productcompare',
  templateUrl: './productcompare.component.html',
  styleUrls: ['./productcompare.component.scss']
})
export class ProductcompareComponent implements OnInit {
  list = [];
  general: any[];
  performance: any[];
  design: any[];
  display: any[];
  storage: any[];
  battery: any[];
  camera: any[];
  feature: any[];
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  dimmed = false;
  columnsToDisplay1 = ['name', 'simtype', 'dualsim', 'simsize', 'Network', 'fingerptintsensor'];
  columnsToDisplay2 = ['name', 'type', 'apectratio', 'notch', 'screentobodyratio', 'screensize'];
  columnsToDisplay3 = ['name', 'weight', 'thickness', 'height', 'colors', 'build'];
  columnsToDisplay4 = ['name', 'removable', 'quickcharging', 'capacity'];
  columnsToDisplay5 = ['name', 'chipset', 'cpu', 'gpu', 'ram'];
  columnsToDisplay6 = ['name', 'internal', 'otgsupport', 'expandableupto'];
  columnsToDisplay7 = ['name', 'features', 'front', 'rear', 'flash', 'videorecording'];

  constructor(
    private compare: ComparisonServiceService,
    public property: PropertyAccessService,
    private notification: NotificationService
  ) {}
  ngOnInit() {
    this.list = this.compare.comparelist;
    this.general = this.compare.general;
    this.display = this.compare.display;
    this.battery = this.compare.battery;
    this.storage = this.compare.storage;
    this.performance = this.compare.performance;
    this.design = this.compare.design;
    this.camera = this.compare.camera;
  }
  remove(item) {
    if (this.list.length < 3) {
      this.notification.info(`${NOTIFICATION.There_must_be_always_two_items_to_compare}`);
    } else {
      this.dimmed = true;
      this.dataLoading.emit(true);
      setTimeout(() => {
        this.dataLoading.emit(false);
        this.dimmed = false;
        this.compare.comparelist = this.compare.comparelist.filter(
          (mobile) => !(mobile.name === item.name)
        );
        this.list = this.compare.comparelist;
        this.compare.display = this.compare.display.filter(
          (product) => !(product.name === item.name)
        );
        this.display = this.compare.display;
        this.compare.battery = this.compare.battery.filter(
          (product) => !(product.name === item.name)
        );
        this.battery = this.compare.battery;
        this.compare.storage = this.compare.storage.filter(
          (product) => !(product.name === item.name)
        );
        this.storage = this.compare.storage;
        this.compare.design = this.compare.design.filter(
          (product) => !(product.name === item.name)
        );
        this.design = this.compare.design;
        this.compare.performance = this.compare.performance.filter(
          (product) => !(product.name === item.name)
        );
        this.performance = this.compare.performance;
        this.compare.general = this.compare.general.filter(
          (product) => !(product.name === item.name)
        );
        this.general = this.compare.general;
        this.compare.camera = this.compare.camera.filter(
          (product) => !(product.name === item.name)
        );
        this.camera = this.compare.camera;
      }, 2000);
    }
  }
}
