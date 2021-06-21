import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PozoristaPageRoutingModule } from './pozorista-routing.module';

import { PozoristaPage } from './pozorista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PozoristaPageRoutingModule
  ],
  declarations: [PozoristaPage]
})
export class PozoristaPageModule {}
