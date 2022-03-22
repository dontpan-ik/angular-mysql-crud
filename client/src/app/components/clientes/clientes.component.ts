import { Component, OnInit } from '@angular/core';

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
  title = "Clientes";
  constructor() { }

  ngOnInit(): void {
  }

}
