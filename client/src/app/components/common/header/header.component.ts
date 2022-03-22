import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  
  @Input() titleComp: string= "title";
  data: any;
  user: User={
    user_id: 0,
    rol: "",
    email: "",
    name:  "",
    last_name: "",
    token: ""
  };

  rol: any;

  constructor() { }
  ngOnInit(): void {
    this.loadUserInfo();
    this.data = this.titleComp;
    console.log(this.titleComp);
  }

  ngAfterViewInit() {
    feather.replace();
  }

  loadUserInfo(){
    this.user.user_id = Number(localStorage.getItem('user_id')  || 0)
    this.rol = localStorage.getItem('rol')  || '';
    this.user.name = localStorage.getItem('name')  || '';
    this.user.last_name = localStorage.getItem('last_name')  || '';
    this.user.email = localStorage.getItem('email')  || '';
    this.user.token = localStorage.getItem('token')  || '';
  }

}
