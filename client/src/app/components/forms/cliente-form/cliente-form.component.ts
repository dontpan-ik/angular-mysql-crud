import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { UsersService } from 'src/app/services/users.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente'; 
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  navbar: any = {
    id: 4,
    title: "Clientes",
  }

  user: Users={
    name: '',
    last_name: '',
    email: '',
    password: '',
    rol_id: 0,
    status: '',
  }

  cliente: Cliente={
    client_id: 0,
    address: '',
    phone_number: '',
    birth_date: ''
  }

  
  edit: boolean= false;

  constructor(
    private clientesService: ClientesService,
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private usersService: UsersService,
    private utilService: UtilService) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['client_id']){
      this.clientesService.getCliente(params['client_id']).subscribe(
        res=>{
          this.user=res;
          this.cliente=res;
          this.edit=true;
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      )
    }
  }

  saveNewCliente(): void {
    console.log(this.cliente)
    delete this.user.user_id;
    this.clientesService.saveCliente(this.cliente).subscribe(
      res=>{
        this.utilService.getLast().subscribe(
          res =>{
            var id = Object.values(res);
            console.log(id[0]);
            var obj ={
              name: this.user.name,
              last_name: this.user.last_name,
              email: this.user.email,
              password: this.user.password,
              rol_id: this.user.rol_id,
              status: this.user.status,
              client_id:id[0]
            }
            this.usersService.saveUser(obj).subscribe(
              res=>{
                this.router.navigate(['/clientes']);
              },
              err=>{
                console.log(err);
              }
            )

          }
        )
      },
      err=>{
        console.log(err)
      }
    )
  }

  updateCliente():void{
    //console.log(this.cliente);
    //console.log(this.user);
    var obj: Users ={
      name: this.user.name,
      last_name: this.user.last_name,
      email: this.user.email,
      password: this.user.password,
      rol_id: this.user.rol_id,
      status: this.user.status,
    }

    var obj2: Cliente ={
      client_id: this.cliente.client_id,
      address: this.cliente.address,
      phone_number: this.cliente.phone_number,
      birth_date: this.cliente.birth_date
    }

    var user_id = this.user.user_id || 0;
    var client_id = this.cliente.client_id || 0;
    this.usersService.updateUser(obj,user_id).subscribe(
      res=>{
        console.log(res);
        this.clientesService.updateCliente(obj2,client_id).subscribe(
          res=>{
            this.router.navigate(['/clientes']);
          },
          err=>{
            console.log(err);
          }
        )
      },
      err=>{
        console.log(err);
      }
    )
  }

  regresar(){
    this.router.navigate(['/clientes']);
  }

}
