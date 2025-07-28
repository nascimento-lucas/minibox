import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { App } from './app';
import { Inicio } from './inicio/inicio';

const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'cadastro', component: Cadastro },
  // { path: 'tela2', component: Tela2Component },
  { path: '**', redirectTo: '' }       
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
