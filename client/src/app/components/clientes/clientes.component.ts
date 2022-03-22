import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  navbar: any = {
    id: 4,
    title: "Clientes",
  }
  clientes: any =[];
  constructor(private router: Router, private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.getClients()
  }

  getClients(){
    this.clientesService.getClientes().subscribe(
      res =>{
        console.log(res);
        this.clientes=res;
      },
      err=>{
        console.log(err);
      }
    )
  }

  searchCliente(){
    
  }

  deleteCliente(id:number){
    console.log(id);
  }
}
