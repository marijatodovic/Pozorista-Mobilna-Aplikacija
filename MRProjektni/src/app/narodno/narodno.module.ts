import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NarodnoPageRoutingModule } from './narodno-routing.module';

import { NarodnoPage } from './narodno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NarodnoPageRoutingModule
  ],
  declarations: [NarodnoPage]
})
export class NarodnoPageModule {}
