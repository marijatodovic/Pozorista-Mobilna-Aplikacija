import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JdpPageRoutingModule } from './jdp-routing.module';

import { JdpPage } from './jdp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JdpPageRoutingModule
  ],
  declarations: [JdpPage]
})
export class JdpPageModule {}
