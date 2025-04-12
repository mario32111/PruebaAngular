import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserResult } from '../../interfaces/users';

@Component({
  selector: 'app-acerca2',
  standalone:false,
  templateUrl: './acerca2.component.html',
  styleUrl: './acerca2.component.css'
})
export class Acerca2Component implements OnInit{
  constructor(private service: UserService){
  }

  users: UserResult | any;

  ngOnInit(): void {
     this.service.getUsers().subscribe((result: UserResult)=>{
        this.users = result;
        console.log(this.users)
     });
  }

}
