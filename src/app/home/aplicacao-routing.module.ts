import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PesquisaHashtagsComponent } from './pesquisa-hashtags/pesquisa-hashtags.component';
import { HashMonitoradaComponent } from './hash-monitorada/hash-monitorada.component';

export const AplicacaoRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'pesquisa-hashtags',
        component: PesquisaHashtagsComponent
      },
      {
        path: 'hashtags-monitoradas',
        component: HashMonitoradaComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(AplicacaoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AplicacaoRoutingModule { }
