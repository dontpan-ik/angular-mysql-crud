import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentasService } from 'src/app/services/ventas.service';

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
  ventas: any =[];
  constructor(private ventasService: VentasService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.ventasService.getOrders().subscribe(
      res => {
        console.log(res)
        this.ventas = res;
      },
      err => console.error(err)
    )
  }

  searchOrder(){
    console.log('Ventas')
  }

  deleteOrder(id: number){
    console.log(id);
  }

}
