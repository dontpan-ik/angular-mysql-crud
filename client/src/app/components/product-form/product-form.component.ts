import { Component, HostBinding, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  //@HostBinding('class') classes = 'row';

  product: Product = {
    name: '',
    brand: '',
    category_id: 0,
    description: '',
    public_price: 0,
    suplier_price: 0,
    stock: 0,
    status: '',
    image_url: 'NOT JET'
  }

  constructor(private productService: ProductsService ) { }

  ngOnInit(): void {
  }

  saveNewProduct(): void {
    console.log(this.product)
    this.productService.saveProduct(this.product)
      .subscribe(
        res=>{
          console.log(res);
        },
        err =>{
          console.log(err);
        }
      )
  }

}
