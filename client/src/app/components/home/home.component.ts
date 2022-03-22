import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navbar: any = {
    id: 8,
    title: "Inicio",
  }
  user: User={
    user_id: 0,
    rol: "",
    email: "",
    name:  "",
    token: ""
  };
  constructor(private loginService: LoginService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo(){
    this.user.user_id = Number(localStorage.getItem('user_id')  || 0)
    this.user.rol = localStorage.getItem('rol_id')  || '';
    this.user.name = localStorage.getItem('name')  || '';
    this.user.email = localStorage.getItem('email')  || '';
    this.user.token = localStorage.getItem('token')  || '';
  }
}
