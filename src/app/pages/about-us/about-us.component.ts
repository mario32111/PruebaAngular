import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserResult } from '../../interfaces/users';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit{
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
