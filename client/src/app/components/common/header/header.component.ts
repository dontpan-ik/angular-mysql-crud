import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input() titleComp: string= "title";

  user: User={
    user_id: 0,
    rol: "",
    email: "",
    name:  "",
    last_name: "",
    token: ""
  };

  constructor() { }
  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo(){
    this.user.user_id = Number(localStorage.getItem('user_id')  || 0)
    this.user.rol = localStorage.getItem('rol')  || '';
    this.user.name = localStorage.getItem('name')  || '';
    this.user.last_name = localStorage.getItem('last_name')  || '';
    this.user.email = localStorage.getItem('email')  || '';
    this.user.token = localStorage.getItem('token')  || '';
  }

}
