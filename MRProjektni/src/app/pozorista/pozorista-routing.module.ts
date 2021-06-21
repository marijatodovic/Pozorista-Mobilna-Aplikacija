import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PozoristaPage } from './pozorista.page';

const routes: Routes = [
  {
    path: '',
    component: PozoristaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PozoristaPageRoutingModule {}
