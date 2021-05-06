import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { AplicacaoModule } from './home/aplicacao.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'aplicacao', loadChildren: () => import('./home/aplicacao.module').then(m => m.AplicacaoModule) },
  { path: '**', component: NaoEncontradaComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AplicacaoModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
