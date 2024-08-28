import { Component } from '@angular/core';
import { ClienteService, ClienteRequest, ResponseDto } from '../cliente.service'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})

export class ClienteComponent {

  meuCliente: ClienteRequest = {
    nome: '',
    endereco: 0,
    estado: '',
    cidade: ''
  };
  constructor(private clienteService: ClienteService) { }


  salvarCliente(): void {
    // Chame o método "salvar" do serviço
    this.clienteService.salvar(this.meuCliente).subscribe((response: ResponseDto) => {
      if (response.sucesso) {
        console.log('Cliente salvo com sucesso!');
        // Faça algo aqui após salvar o cliente (por exemplo, redirecionar para outra página)
      } else {
        console.error('Erro ao salvar o cliente:', response.mensagem);
        // Trate o erro de acordo com a sua lógica de negócio
      }
    });
  }
}
