import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  navbar: any = {
    id: 7,
    title: "Usuarios",
  }

  user: Users={
    user_id: 0,
    name: "",
    last_name: "",
    email: "",
    password: "",
    rol_id:0,
    status: "ACTIVE"
  }
  users: any =[];
  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => console.error(err)
    )
  }

  deleteUser(id: number){
    this.usersService.deleteUser(id).subscribe(
      res =>{
        this.getUsers();
      },
      err => console.log(err)
    )
  }

  searchUser(){
    console.log('searching...');
  }

  addUser(){
    console.log('adding...');
  }

  editProduct(id: number){
    console.log('Your id '+id);
  }

}
