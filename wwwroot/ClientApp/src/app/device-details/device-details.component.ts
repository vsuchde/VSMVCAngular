import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { DeviceMgmtServiceService } from '../device-mgmt-service.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {
product;

 constructor(
   private route: ActivatedRoute,  
   private DeviceService: DeviceMgmtServiceService
  ) { }

addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.DeviceService.addToCart(product);
  }


  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('deviceId')];
  });
}

}