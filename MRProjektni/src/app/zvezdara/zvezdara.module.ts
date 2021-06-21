import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZvezdaraPageRoutingModule } from './zvezdara-routing.module';

import { ZvezdaraPage } from './zvezdara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZvezdaraPageRoutingModule
  ],
  declarations: [ZvezdaraPage]
})
export class ZvezdaraPageModule {}
