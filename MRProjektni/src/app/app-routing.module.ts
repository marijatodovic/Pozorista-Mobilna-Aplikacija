import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pocetna',
    pathMatch: 'full'
  },
  {
    path: 'log-in',
    loadChildren: () => import('./auth/log-in/log-in.module').then(m => m.LogInPageModule)
  },
  {
    path: 'registracija',
    loadChildren: () => import('./auth/registracija/registracija.module').then(m => m.RegistracijaPageModule)
  },
  {
    path: 'pocetna',
    loadChildren: () => import('./pocetna/pocetna.module').then( m => m.PocetnaPageModule)
  },
  {
    path: 'pozorista',
    loadChildren: () => import('./pozorista/pozorista.module').then( m => m.PozoristaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'narodno',
    loadChildren: () => import('./narodno/narodno.module').then( m => m.NarodnoPageModule)
  },
  {
    path: 'madlenianum',
    loadChildren: () => import('./madlenianum/madlenianum.module').then( m => m.MadlenianumPageModule)
  },
  {
    path: 'jdp',
    loadChildren: () => import('./jdp/jdp.module').then( m => m.JdpPageModule)
  },
  {
    path: 'atelje',
    loadChildren: () => import('./atelje/atelje.module').then( m => m.AteljePageModule)
  },
  {
    path: 'zvezdara',
    loadChildren: () => import('./zvezdara/zvezdara.module').then( m => m.ZvezdaraPageModule)
  },
  {
    path: 'terazije',
    loadChildren: () => import('./terazije/terazije.module').then( m => m.TerazijePageModule)
  },
  {
    path: 'rezervacija',
    loadChildren: () => import('./rezervacija/rezervacija.module').then( m => m.RezervacijaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
