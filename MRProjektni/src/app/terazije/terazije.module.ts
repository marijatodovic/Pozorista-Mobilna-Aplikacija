import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerazijePageRoutingModule } from './terazije-routing.module';

import { TerazijePage } from './terazije.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerazijePageRoutingModule
  ],
  declarations: [TerazijePage]
})
export class TerazijePageModule {}
