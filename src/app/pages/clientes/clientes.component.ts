import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { CustomerResult } from '../../interfaces/customers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  imports: [CommonModule], // <-- AGREGA CommonModule AQUÍ
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
  constructor(private service: ClientesService){
  }

  customers: CustomerResult | any;

  ngOnInit(): void {
     this.service.getCustomers().subscribe((result: CustomerResult)=>{
        this.customers = result;
        console.log(this.customers)
     });
  }

}
