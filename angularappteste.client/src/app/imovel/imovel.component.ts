import { Component } from '@angular/core';
import { ImovelService } from '../services/imovel.service'
import { ImpostoService } from '../services/imposto.service'
import { ClienteService, ClienteRequest, ResponseDto } from '../cliente.service'
import { Observable } from 'rxjs';
import { ClienteModel } from '../models/cliente.model';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrl: './imovel.component.css'
})
export class ImovelComponent {
  Cliente: ClienteRequest = new ClienteRequest();
  cliente$: Observable<ResponseDto> = new Observable<ResponseDto>();
  constructor(private imovelService: ImovelService, private impostoService: ImpostoService, private clienteService: ClienteService) { }

  ValorImovel: number = 0;
  resultado: number = 0;
  Nome?: string = '';
  Imposto: number = 0;
  result: any = [];
  //cliente$ = new Observable<ResponseDto>()

  retorno!: ResponseDto;

  campo: string = ""


  calcular() {
    this.resultado = this.ValorImovel * 10;
    this.Nome = this.imovelService.MeuNome();
    this.Imposto = this.impostoService.calcular(this.ValorImovel);
  }

  //Cliente: any = [];

  MeuNome: string = '';
  salvar() {

    this.cliente$ = this.clienteService.salvar(this.Cliente);

    //this.cliente$.subscribe({
    //  next: (response: ResponseDto) => {
    //    if (response.sucesso) {
    //      console.log('Cliente salvo com sucesso:', response.mensagem);
    //    } else {
    //      console.error('Erro ao salvar cliente:', response.mensagem);
    //    }
    //  },
    //  error: (err) => {
    //    console.error('Erro na requisição:', err);
    //  }
    //});

    
    //console.log(this.cliente$);
  }
 

}
