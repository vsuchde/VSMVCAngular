import { Component, OnInit } from '@angular/core';
import { DeviceMgmtServiceService } from '../device-mgmt-service.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
shippingCosts;
  constructor(private DeviceService: DeviceMgmtServiceService) { }

  ngOnInit() {
    this.shippingCosts = this.DeviceService.getShippingPrices();
  }

}