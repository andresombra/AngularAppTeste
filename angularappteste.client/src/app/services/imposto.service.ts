import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImpostoService {

  constructor() { }

  calcular(valor: number): number {
    return valor * 0.1;
  }
}
