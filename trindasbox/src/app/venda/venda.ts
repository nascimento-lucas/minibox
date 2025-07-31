import { Component } from '@angular/core';
import { BackendService } from '../backend-service'
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-venda',
  standalone: false,
  templateUrl: './venda.html',
  styleUrl: './venda.css'
})
export class Venda {
  tipoVendaSelecionado = '';
  itemVenda: any = this.resetItem();
  carrinho: any[] = [];
  mensagem = '';

  constructor(private backend: BackendService) {}

  resetItem() {
    return {
      tipo: '',
      nome: '',
      id: '',
      quantidade: 1,
      numeroCracha: ''
    };
  }

  adicionarAoCarrinho() {
    if (!this.tipoVendaSelecionado || !this.itemVenda.numeroCracha) return;

    const novoItem = {
      tipo: this.tipoVendaSelecionado,
      nome: this.itemVenda.nome,
      id: this.itemVenda.id,
      quantidade: +this.itemVenda.quantidade,
      numeroCracha: this.itemVenda.numeroCracha
    };

    this.carrinho.push(novoItem);
    this.itemVenda = this.resetItem();
    this.itemVenda.tipo = this.tipoVendaSelecionado;
    this.mensagem = 'Produto adicionado ao carrinho!';

  }

  descartarCarrinho() {
    this.carrinho = [];
    this.itemVenda = this.resetItem();
  }

  async finalizarVenda() {
  if (this.carrinho.length === 0) return;

  const erros: string[] = [];

  const promessas = this.carrinho.map(async item => {
    try {
      if (item.tipo === 'alimento') {
        await firstValueFrom(this.backend.venderAlimento({
          id: item.id,
          quantidade: item.quantidade,
          numeroCracha: item.numeroCracha
        }));
      } else if (item.tipo === 'produto') {
        await firstValueFrom(this.backend.venderProduto({
          id: item.id,
          quantidade: item.quantidade,
          numeroCracha: item.numeroCracha
        }));
      }
    } catch (e: any) {
      console.error(`Erro ao vender ${item.tipo}:`, e);
      erros.push(`Erro ao vender ${item.tipo}:`, e.message || 'Erro desconhecido');
    }
  });

  await Promise.all(promessas);

  if (erros.length > 0) {
    this.mensagem = `Falha ao vender os itens!`;
  } else {
    this.mensagem = 'Venda realizada com sucesso!';
  }

  this.carrinho = [];
  this.itemVenda.nome = '';
  this.itemVenda.id = '';
  this.itemVenda.quantidade = 1;
  this.itemVenda.numeroCracha = '';
}

  getTotalItems() {
    return this.carrinho.reduce((total, item) => total + item.quantidade, 0);
  }
}

