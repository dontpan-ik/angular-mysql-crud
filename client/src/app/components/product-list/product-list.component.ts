import { Component, HostBinding, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //@HostBinding( 'class') classes = 'row';

  title = "Productos";

  products: any =[];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productsService.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => console.error(err)
    )
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id).subscribe(
      res =>{
        console.log(res);
        this.getProducts();
      },
      err => console.log(err)
    )
  }

  editProduct(id: string){
    console.log(id);
  }

}
