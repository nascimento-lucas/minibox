import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Cadastro } from './cadastro/cadastro';
import { Inicio } from './inicio/inicio';
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { Consulta } from './consulta/consulta';
import { Venda } from './venda/venda';
@NgModule({
  declarations: [App, Cadastro, Inicio, Consulta, Venda],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App],
})
export class AppModule {}
