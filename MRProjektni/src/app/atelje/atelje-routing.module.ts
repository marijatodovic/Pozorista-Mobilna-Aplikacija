import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AteljePage } from './atelje.page';

const routes: Routes = [
  {
    path: '',
    component: AteljePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AteljePageRoutingModule {}
