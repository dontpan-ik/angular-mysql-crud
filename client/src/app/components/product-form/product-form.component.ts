import { Component, HostBinding, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsService} from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  edit :boolean = false;

  navbar: any = {
    id: 3,
    title: "Productos",
  }

  constructor(private productService: ProductsService, private router: Router, private activedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    console.log(params['product_id'])
    if(params['product_id']){
      this.productService.getProduct(params['product_id']).subscribe(
        res=>{
          this.product=res;
          this.edit=true;
          //console.log(this.product);
        },
        err=>{
          console.log(err);
        }
      )
    }

  }
  
  saveNewProduct(): void {
    console.log(this.product)
    this.productService.saveProduct(this.product)
      .subscribe(
        res=>{
          this.router.navigate(['/products']);
        },
        err =>{
          console.log(err);
        }
      )
  }

  updateProduct():void{
    var id = this.product.product_id || 0;
    //this.productService.updateProduct(this.product,this.product.product_id);
    this.productService.updateProduct(this.product,id).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/products']);
      },
      err=>{
        console.log(err);
      }
    )
  }

}
