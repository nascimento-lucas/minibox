// backend.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BackendService {
  apiUrl = 'https://flask-backend-pied.vercel.app';

  constructor(private http: HttpClient) {}

  // Rota de teste
  getMensagem() {
    return this.http.get(`${this.apiUrl}`);
  }

  // USUÁRIOS
  criarUsuario(usuario: { tipo: string; nome: string; numeroCracha: string; valor: string }) {
    return this.http.post(`${this.apiUrl}/novousuario`, usuario);
  }

  listarUsuarios() {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }

  buscarUsuario(numeroCracha: string) {
    return this.http.get(`${this.apiUrl}/usuario/${numeroCracha}`);
  }

  adicionarValorAoUsuario(numeroCracha: string, valor: string) {
    return this.http.post(`${this.apiUrl}/usuario/adicionarvalor`, { numeroCracha, valor });
  }

  listarUsuariosEmDivida() {
    return this.http.get(`${this.apiUrl}/usuario/divida`);
  }

  // PRODUTOS (Artigos Religiosos)
  criarProduto(produto: { tipo: string; nome: string; descricao: string; id: string; quantidade: string; valor: string }) {
    return this.http.post(`${this.apiUrl}/novoproduto`, produto);
  }

  listarProdutos() {
    return this.http.get(`${this.apiUrl}/produtos`);
  }

  venderProduto(dados: { id: string; quantidade: number; numeroCracha: string }) {
    return this.http.post(`${this.apiUrl}/venderproduto`, dados);
  }

    buscarProdutoPorId(id: string) {
    return this.http.get(`${this.apiUrl}/produto/${id}`);
  }

  // ALIMENTOS
  criarAlimento(alimento: { tipo: string; nome: string; quantidade: string; valor: string }) {
    return this.http.post(`${this.apiUrl}/novoalimento`, alimento);
  }

  listarAlimentos() {
    return this.http.get(`${this.apiUrl}/alimentos`);
  }

  buscarAlimentoPorId(id: string) {
    return this.http.get(`${this.apiUrl}/alimento/${id}`);
  }

  venderAlimento(dados: { id: string; quantidade: string; numeroCracha: string }) {
    return this.http.post(`${this.apiUrl}/venderalimento`, dados);
  }
}
