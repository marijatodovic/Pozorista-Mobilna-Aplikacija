import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JdpPage } from './jdp.page';

const routes: Routes = [
  {
    path: '',
    component: JdpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JdpPageRoutingModule {}
