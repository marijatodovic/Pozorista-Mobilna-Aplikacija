import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MadlenianumPageRoutingModule } from './madlenianum-routing.module';

import { MadlenianumPage } from './madlenianum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MadlenianumPageRoutingModule
  ],
  declarations: [MadlenianumPage]
})
export class MadlenianumPageModule {}
