import { Component } from '@angular/core';
import { BackendService } from '../backend-service';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})

export class Cadastro {
  constructor(private backendService: BackendService) {}
  tipoSelecionado = '';
  usuario = {
    tipo: 'usuario',
    nome: '',
    numeroCracha: '',
    valor: '',
  }
  produto = {
    tipo: 'artigoReligioso',
    nome: '',
    descricao: '',
    id: '',
    quantidade: '',
    valor: '',
  }
  alimento = {
    tipo: 'alimento',
    nome: '',
    quantidade: '',
    valor: '',
    id:'',
  }

  confirmar() {
    if (this.tipoSelecionado === "") {
      alert("Por favor, selecione um tipo.");
      return;
    }
    else if (this.tipoSelecionado === 'usuarios') {
      if(!this.usuario.numeroCracha) {
        alert("Por favor, preencha o número do crachá.");
        return;
      }
      this.backendService.criarUsuario(this.usuario).subscribe((res: any) => {
        console.log(res);
        alert("Cadastro realizado com sucesso!");
      });
    }
    else if (this.tipoSelecionado === 'religiosos') {
      if(!this.produto.nome || !this.produto.descricao || !this.produto.id || !this.produto.quantidade || !this.produto.valor) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
      this.backendService.criarProduto(this.produto).subscribe((res: any) => {
        console.log(res);
        alert("Cadastro realizado com sucesso!");
      });
    }
    else if (this.tipoSelecionado === 'alimentos') {
      if(!this.alimento.nome || !this.alimento.quantidade || !this.alimento.valor) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
      this.backendService.criarAlimento(this.alimento).subscribe((res: any) => {
        console.log(res);
        alert("Cadastro realizado com sucesso!");
      });
    }
    this.usuario = { tipo: 'usuario', nome: '', numeroCracha: '', valor: '' };
    this.produto = { tipo: 'artigoReligioso', nome: '', descricao: '', id: '', quantidade: '', valor: '' };
    this.alimento = { tipo: 'alimento', nome: '', quantidade: '', valor: '', id:'' };
  }

  // setValue(value: string) {
  //   switch (value) {
  //     case 'nomeAlimento':
  //       this.alimento.nome = value;
  //       break;
  //     case 'idAlimento':
  //       this.alimento.id = value;
  //       break;
  //     case 'qtd':
  //       this.alimento.quantidade = value;
  //       break;
  //     case 'valorAlimento':
  //       this.alimento.valor = value;
  //       break;
  //     case 'nomeProduto':
  //       this.produto.nome = value;
  //       break;
  //     case 'descricao':
  //       this.produto.descricao = value;
  //       break;
  //     case 'idProduto':
  //       this.produto.id = value;
  //       break;
  //     case 'qtd':
  //       this.produto.quantidade = value;
  //       break;
  //     case 'valorProduto':
  //       this.produto.valor = value;
  //       break;
  //     case 'nomeUsuario':
  //       this.usuario.nome = value;
  //       break;
  //     case 'numeroCracha':
  //       this.usuario.numeroCracha = value;
  //       break;
  //     default:
  //       break;
  //   }
  // }
}
