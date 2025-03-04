import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',  // Este debe coincidir con el selector en el HTML
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router){}
  goLogin(){
    this.router.navigate(['/login'], { state: {dato: "DESARROLLO DE APLICACIONES WEB"} });
  }

}
