import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerResult } from '../interfaces/customers';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

    constructor(private http: HttpClient) { }

    getCustomers(){
      return this.http.get<CustomerResult>("http://localhost/web/consultaCustomer.php")
    }
}
