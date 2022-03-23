import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/models/venta';
import { Router, ActivatedRoute } from '@angular/router';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-ventas-form',
  templateUrl: './ventas-form.component.html',
  styleUrls: ['./ventas-form.component.css']
})
export class VentasFormComponent implements OnInit {

  navbar: any = {
    id: 1,
    title: "Ventas",
  }

  venta: Venta={
    client_id: 0,
    total_items: 0,
    total_charge: 0,
    status: "Activo",
  }
  constructor(private router: Router, private ventasService: VentasService) { }

  ngOnInit(): void {
  }

  saveNewVenta(): void {
    this.ventasService.saveOrder(this.venta)
      .subscribe(
        res=>{
          this.router.navigate(['/ventas']);
        },
        err =>{
          console.log(err);
        }
      )
  }

  regresar(){
    this.router.navigate(['/ventas']);
  }

}
