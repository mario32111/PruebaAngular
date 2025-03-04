import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  //esta es la propiedad del modelo de ala estructura (del ngModel)
  nombre: string = "";
  password: string = "";
  ngOnInit(): void {
    this.nombre = history.state.nombre || ''
    this.password = history.state.password || ''
  }

  // Función para manejar el envío del formulario
  onSubmit() {
    // Llama a goInfo con los valores de los inputs
    this.goInfo(this.nombre, this.password);
  }
  goInfo(nombre: string, password: string) {
    this.router.navigate(['/info'], { state: { nombre: nombre, password: password } });
  }
}
