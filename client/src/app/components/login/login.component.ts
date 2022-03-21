import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: Login={
    email: "",
    password: ""
  };
  err_message = false;
  
  constructor(private loginService: LoginService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
  }

  login_into(){
    this.loginService.login(this.login)
      .subscribe(
        res => {
          const data = res;
          localStorage.setItem("access_token",data.access_token);
          localStorage.setItem('user_id', data.user_id);
          localStorage.setItem('name', data.name);
          localStorage.setItem('email', data.email);
          localStorage.setItem('rol_id',data.rol_id);
          this.router.navigate(['/home']);
          
          
        },
        err => {
          console.log(err);
          this.err_message = true;
          this.router.navigate(['/login']);
        }
    )
  }

  
}
