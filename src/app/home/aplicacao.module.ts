import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AplicacaoRoutingModule } from './aplicacao-routing.module';
import { HomeComponent } from './home.component';
import { PesquisaHashtagsComponent } from './pesquisa-hashtags/pesquisa-hashtags.component';
import { HttpClientModule } from '@angular/common/http';
import { HashMonitoradaComponent } from './hash-monitorada/hash-monitorada.component';
import { GMapModule } from 'primeng/gmap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

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
    GMapModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [
    HomeComponent
  ],

})
export class AplicacaoModule { }
