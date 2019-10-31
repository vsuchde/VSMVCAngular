import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { DeviceMgmtServiceService } from '../device-mgmt-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(private DeivceService:DeviceMgmtServiceService) { }

  ngOnInit() {
    this.items=this.DeivceService.getItems();
  }

}