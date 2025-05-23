import { Component } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: false,
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  constructor(private acountsService: AccountsService) {
  }
  //esta es la propiedad del modelo de ala estructura (del ngModel)
  email: string = "";
  password: string = "";

  // Función para manejar el envío del formulario
  onSubmit() {
    // Llama a goInfo con los valores de los inputs
    const data = {
      parEmail: this.email,
      parPass: this.password
    }
    this.acountsService.verificar(data).subscribe((datos: any) => {
      console.log(datos)
    });
  }

}
