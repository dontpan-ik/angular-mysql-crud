import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  navbar: any = {
    id: 1,
    title: "Ventas",
  }
  title = "Ventas";
  constructor() { }

  ngOnInit(): void {
  }

}
