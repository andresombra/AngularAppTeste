import { Component } from '@angular/core';
import { ImovelService } from '../services/imovel.service'
import { ImpostoService } from '../services/imposto.service'

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrl: './imovel.component.css'
})
export class ImovelComponent {

  constructor(private imovelService: ImovelService, private impostoService: ImpostoService) { }

  ValorImovel: number = 0;
  resultado: number = 0;
  Nome: string = '';
  Imposto: number = 0;

  calcular() {
    this.resultado = this.ValorImovel * 10;
    this.Nome = this.imovelService.MeuNome();
    this.Imposto = this.impostoService.calcular(this.ValorImovel);
  }
 

}
