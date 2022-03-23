import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

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

  order_details: any = [];
  constructor(private router: Router, private orderDetailsService: OrderDetailsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['order_id']){
      this.orderDetailsService.getOrders(params['order_id']).subscribe(
        res=>{
          this.order_details = res;
          console.log(this.order_details);
        },
        err=>{
          console.log(err);
        }
      )
    }
  }

  regresar(){
    this.router.navigate(['/ventas']);
  }

  getOrderDetails(id:number){
    console.log(id);
  }




}
