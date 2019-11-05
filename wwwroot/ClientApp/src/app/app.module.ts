import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DeviceMgmtServiceService } from './device-mgmt-service.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AddDeviceComponent } from './add-device/add-device.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'devices/:deviceId', component: DeviceDetailsComponent},
      { path: 'cart', component:CartComponent},
      {path:'shipping',component:ShippingComponent},
      {path:'adddevice',component:AddDeviceComponent}

    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    DeviceDetailsComponent,
    CartComponent,
    ShippingComponent,
    AddDeviceComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [DeviceMgmtServiceService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/