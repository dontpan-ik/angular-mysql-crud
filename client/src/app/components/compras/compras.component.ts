import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  navbar: any = {
    id: 2,
    title: "Compras",
  }
  title = "Compras";
  constructor() { }

  ngOnInit(): void {
  }

}
