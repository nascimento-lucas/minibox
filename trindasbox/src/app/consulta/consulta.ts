import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta',
  standalone: false,
  templateUrl: './consulta.html',
  styleUrl: './consulta.css',
})
export class Consulta {
  tipoSelecionado = '';

  confirmar() {
    // Simulação de envio. Aqui você pode capturar os dados e enviar para um serviço.
    alert(`Formulário de ${this.tipoSelecionado} confirmado!`);
  }

  // setValue(opt: string) {
  //   switch (opt) {
  //     case 'nomeAlimento':
  //       break;
  //     case 'qtd':
  //       break;
  //     case 'valorAlimento':
  //       break;
  //     case 'nomeProduto':
  //       break;
  //     case 'descricao':
  //       break;
  //     case 'qtd':
  //       break;
  //     case 'valorProduto':
  //       break;
  //     case 'nomeUsuario':
  //       break;
  //     case 'numeroCracha':
  //       break;
  //     default:
  //       break;
  //   }
  // }
}
