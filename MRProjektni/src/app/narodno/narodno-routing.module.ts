import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NarodnoPage } from './narodno.page';

const routes: Routes = [
  {
    path: '',
    component: NarodnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NarodnoPageRoutingModule {}
