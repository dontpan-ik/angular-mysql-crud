import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { jsPDF } from "jspdf";
import { Html2CanvasOptions } from 'jspdf';
import html2canvas from 'html2canvas';

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

  myDate: any;
  
  constructor(private router: Router, private orderDetailsService: OrderDetailsService, private activatedRoute: ActivatedRoute) { 
  }

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

  generatePDF(){
    //this.doc.text("Hello world!", 10, 10);
    //this.doc.save("a4.pdf");
    const DATA: any = document.getElementById('user_report');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3,
    };
    html2canvas(DATA, options).then(
      (canvas) =>{
        const img = canvas.toDataURL ('image/PNG');
        const bufferX = 15;
        const bufferY = 15; 
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX; 
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(
          img,
          'PNG',
          bufferX,
          bufferY,
          pdfWidth,
          pdfHeight,
          undefined,
          'FAST'
        );
        return doc;
      }
    )
    .then((docResult)=>{
      docResult.save(`${new Date().toDateString}_reporte.pdf`);

    })

  }


}
