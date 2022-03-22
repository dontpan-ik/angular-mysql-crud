import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente'; 

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

  cliente: Cliente={
    name: '',
    last_name: '',
    email: '',
    password: '',
    rol_id: 0,
    status: '',
    client_id: 0,
    address: '',
    phone_number: '',
    birth_date: ''
  }

  
  edit: boolean= false;

  constructor(private clientesService: ClientesService,private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['client_id']){
      this.clientesService.getCliente(params['client_id']).subscribe(
        res=>{
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
  }

  updateCliente():void{
    console.log(this.cliente);
  }

  regresar(){
    this.router.navigate(['/clientes']);
  }

}
