import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  navbar: any = {
    id: 1,
    title: "Ventas",
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  regresar(){
    this.router.navigate(['/ventas']);
  }


}
