import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { Router } from '@angular/router';

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

  provedores: any =[];
  
  constructor(private router: Router, private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.getProvedores();
  }

  getProvedores(){
    this.proveedoresService.getProveedores().subscribe(
      res =>{
        this.provedores=res;
      },
      err =>{
        console.log(err);
      }
    )
  }

  deleteProveedor(id: number){
    this.proveedoresService.deleteProveedor(id).subscribe(
      res =>{
        this.getProvedores();
      },
      err => console.log(err)
    )
  }

  searchProveedor(){
    
  }
}
