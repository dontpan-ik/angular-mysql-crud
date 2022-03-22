import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  navbar: any = {
    id: 5,
    title: "Proveedores",
  }
  title = "Proveedores";
  constructor() { }

  ngOnInit(): void {
  }

}
