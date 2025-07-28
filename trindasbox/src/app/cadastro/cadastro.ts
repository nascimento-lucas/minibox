import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  tipoSelecionado = '';

  confirmar() {
    // Simulação de envio. Aqui você pode capturar os dados e enviar para um serviço.
    alert(`Formulário de ${this.tipoSelecionado} confirmado!`);
  }

  setValue(opt: string) {
    switch (opt) {
      case 'nomeAlimento':
        break;
      case 'qtd':
        break;
      case 'valorAlimento':
        break;
      case 'nomeProduto':
        break;
      case 'descricao':
        break;
      case 'idProduto':
        break;
      case 'qtd':
        break;
      case 'valorProduto':
        break;
      case 'nomeUsuario':
        break;
      case 'numeroCracha':
        break;
      default:
        break;
    }
  }
}
