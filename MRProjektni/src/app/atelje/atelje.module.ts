import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AteljePageRoutingModule } from './atelje-routing.module';

import { AteljePage } from './atelje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AteljePageRoutingModule
  ],
  declarations: [AteljePage]
})
export class AteljePageModule {}
