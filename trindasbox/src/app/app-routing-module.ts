import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Inicio } from './inicio/inicio';
import { Consulta } from './consulta/consulta';
import { Venda } from './venda/venda';

const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'venda', component: Venda },
  { path: 'consulta', component: Consulta },
  { path: 'cadastro', component: Cadastro },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
