import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../../models/proveedor';
import { Router, ActivatedRoute } from '@angular/router';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-proveedores-form',
  templateUrl: './proveedores-form.component.html',
  styleUrls: ['./proveedores-form.component.css']
})
export class ProveedoresFormComponent implements OnInit {

  navbar: any = {
    id: 5,
    title: "Proveedores",
  }

  edit: boolean= false;

  proveedor: Proveedor={
    suplier_id: 0,
    company_name: "",
    category: "",
    email: "",
    address: "",
    contact_number: "",
    score: 0,
    status: "",
  }

  constructor(private router: Router, private proveedoresService: ProveedoresService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['suplier_id']){
      this.proveedoresService.getProveedor(params['suplier_id']).subscribe(
        res=>{
          this.proveedor=res;
          this.edit=true;
        },
        err=>{
          console.log(err);
        }
      )
    }

  }

  saveNewProveedor(): void {
    //delete this.user.user_id;
    delete this.proveedor.suplier_id;
    this.proveedoresService.saveProveedor(this.proveedor).subscribe(
      res=>{
        this.router.navigate(['/proveedores']);
      },
      err =>{
        console.log(err);
      }
    )
  }

  updateProveedor():void{
    var id = this.proveedor.suplier_id || 0;
    this.proveedoresService.updateProveedor(this.proveedor,id).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/proveedores']);
      },
      err=>{
        console.log(err);
      }
    )
  }

  regresar(){
    this.router.navigate(['/proveedores']);
  }

}
