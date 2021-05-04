import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AplicacaoRoutingModule } from './aplicacao-routing.module';
import { HomeComponent } from './home.component';
import { PesquisaHashtagsComponent } from './pesquisa-hashtags/pesquisa-hashtags.component';



@NgModule({
  declarations: [
    HomeComponent,
    PesquisaHashtagsComponent
  ],
  imports: [
    CommonModule,
    AplicacaoRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    HomeComponent
  ],

})
export class AplicacaoModule { }
