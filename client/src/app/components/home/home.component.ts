import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: Login = {
    email: '',
    password: ''
  }
  constructor(private loginService: LoginService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
  }

  login_into():void{
    console.log(this.login);
    this.loginService.login(this.login)
      .subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log(err)
        }
      )
  }
}
