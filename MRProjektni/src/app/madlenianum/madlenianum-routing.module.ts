import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MadlenianumPage } from './madlenianum.page';

const routes: Routes = [
  {
    path: '',
    component: MadlenianumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MadlenianumPageRoutingModule {}
