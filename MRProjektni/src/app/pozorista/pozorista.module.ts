import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PozoristaPageRoutingModule } from './pozorista-routing.module';

import { PozoristaPage } from './pozorista.page';
import {NjuzleterComponent} from "./njuzleter/njuzleter.component";
import {KomentarComponent} from "./komentar/komentar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PozoristaPageRoutingModule
  ],
  declarations: [PozoristaPage, NjuzleterComponent, KomentarComponent],
  entryComponents: [NjuzleterComponent]
})
export class PozoristaPageModule {}
