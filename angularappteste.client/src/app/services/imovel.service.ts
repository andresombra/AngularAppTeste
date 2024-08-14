import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  constructor() { }

  MeuNome():string{
    return "Andre Luiz";
  }

}
