import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

export class ClienteRequest {
  nome?: string;
  endereco?: number;
  estado?: string;
  cidade?: string;
}

export interface ResponseDto {
  sucesso: boolean;
  mensagem?: string;
  nome?: string;
  endereco?: number;
  estado?: string;
  cidade?: string;
}
const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'https://localhost:7050/Cliente';
  private apiUrlClima = 'http://localhost:5039/WeatherForecast';

  constructor(private http: HttpClient) {}

  Cliente: ClienteRequest[] = [];

  salvar(cliente: ClienteRequest): Observable<ResponseDto> {
    return this.http.post<ResponseDto>(this.apiUrl, cliente, { headers }).pipe(
      catchError((error) => {
        console.error('Erro ao salvar cliente:', error);
        // Trate o erro conforme sua lógica de negócio
        throw error; // Rejeita a Observable com o erro
      })
    );
  }
}
