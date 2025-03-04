import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone:false,
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent  implements OnInit{

  //esta es la propiedad del modelo de ala estructura (del ngModel)
  nombre: string = "";
  password: string = "";
  ngOnInit(): void {
    this.nombre= history.state.nombre || 'No hay informacion'
    this.password= history.state.password || 'No hay informacion'
  }

}
