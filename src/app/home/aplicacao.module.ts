import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AplicacaoRoutingModule } from './aplicacao-routing.module';
import { HomeComponent } from './home.component';
import { PesquisaHashtagsComponent } from './pesquisa-hashtags/pesquisa-hashtags.component';
import { HttpClientModule } from '@angular/common/http';
import { HashMonitoradaComponent } from './hash-monitorada/hash-monitorada.component';
import { GMapModule } from 'primeng/gmap';


@NgModule({
  declarations: [
    HomeComponent,
    PesquisaHashtagsComponent,
    HashMonitoradaComponent
  ],
  imports: [
    CommonModule,
    AplicacaoRoutingModule,
    FormsModule,
    HttpClientModule,
    GMapModule
  ],
  providers: [],
  bootstrap: [
    HomeComponent
  ],

})
export class AplicacaoModule { }
