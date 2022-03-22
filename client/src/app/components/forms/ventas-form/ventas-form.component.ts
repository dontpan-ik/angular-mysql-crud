import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
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
  constructor() { }

  ngOnInit(): void {
  }

}
