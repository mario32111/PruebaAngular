import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  url = 'http://localhost/web/';
  constructor(private http: HttpClient) { }
  alta(data: any) {
    return this.http.post(`${this.url}registroUsuario.php`, JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
