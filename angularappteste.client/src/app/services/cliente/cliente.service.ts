import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  Retorna(): string {
    return "Cliente Teste";
  }
}
