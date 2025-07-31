import { Component } from '@angular/core';
import { BackendService } from '../backend-service';

@Component({
  selector: 'app-consulta',
  standalone: false,
  templateUrl: './consulta.html',
  styleUrl: './consulta.css',
})
export class Consulta {
  tipoConsultaSelecionado = '';
  numeroCracha = '';
  idAlimento = '';
  idProduto = '';
  resultado: any = null;

  constructor(private backend: BackendService) {}

  consultarTodos() {
    switch (this.tipoConsultaSelecionado) {
      case 'usuarios':
        this.backend.listarUsuariosEmDivida().subscribe((res) => {
          this.resultado = res;
          console.log(res);
        });
        break;
      case 'alimentos':
        this.backend.listarAlimentos().subscribe((res) => {
          this.resultado = res;
          console.log(res);
        });
        break;
      case 'produtos':
        this.backend.listarProdutos().subscribe((res) => {
          this.resultado = res;
          console.log(res);
        });
        break;
    }
  }

  buscarProdutoPorId() {
    if (this.tipoConsultaSelecionado) {
      this.backend.buscarProdutoPorId(this.idProduto).subscribe((res) => {
        this.resultado = res;
        console.log(res);
      });
    }
  }

  buscarUsuarioPorCracha() {
    if (this.numeroCracha) {
      this.backend.buscarUsuario(this.numeroCracha).subscribe((res) => {
        this.resultado = res;
        console.log(res);
      });
    }
  }

  buscarAlimentoPorId() {
    if (this.idAlimento) {
      this.backend.buscarAlimentoPorId(this.idAlimento).subscribe((res) => {
        this.resultado = res;
        console.log(res);
      });
    }
  }

  isArray(obj: any): boolean {
    return Array.isArray(obj);
  }

  isObject(obj: any): boolean {
    return obj && typeof obj === 'object' && !Array.isArray(obj);
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
