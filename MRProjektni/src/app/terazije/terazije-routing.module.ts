import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerazijePage } from './terazije.page';

const routes: Routes = [
  {
    path: '',
    component: TerazijePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerazijePageRoutingModule {}
