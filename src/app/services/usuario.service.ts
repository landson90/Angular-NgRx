import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario-model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private urlBase = 'http://localhost:3000/usuario';

  constructor(private httpClient: HttpClient) {}

  getUsuarios() {
    return this.httpClient.get<UsuarioModel[]>(this.urlBase);
  }

  getUsuario(id: number) {
    return this.httpClient.get<UsuarioModel>(this.urlBase + `/${id}`);
  }

  addUsuario(record: UsuarioModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json; charset=utf-8');
    return this.httpClient.post<UsuarioModel>(
      this.urlBase,
      JSON.stringify(record),
      {
        headers: headers,
      }
    );
  }

  updateUsuario(record: UsuarioModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json; charset=utf-8');
    return this.httpClient.put<UsuarioModel>(
      this.urlBase + `/${record.id}`,
      JSON.stringify(record),
      {
        headers: headers,
      }
    );
  }

  deleteUsuario(id: number) {
    return this.httpClient.delete(this.urlBase + `/${id}`);
  }
}
