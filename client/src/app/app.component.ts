import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KGIRL';

  token : String;
  tipo = "";
  constructor(private loginService : LoginService) {
    this.token="";
  }

  ngOnInit(): void {
    this.token = this.readLocalStorageToken('access_token');
  }

  readLocalStorageToken(key:string): any {
    console.log(localStorage.getItem(key));
    if(localStorage.getItem(key)){
      //return localStorage.getItem(key);
      return "logeado"
      this.ngOnInit()

    }else{
      return "";
    }
  }
}
