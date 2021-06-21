import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZvezdaraPage } from './zvezdara.page';

const routes: Routes = [
  {
    path: '',
    component: ZvezdaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZvezdaraPageRoutingModule {}
