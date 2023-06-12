import { Component, OnInit } from '@angular/core';
import { ToastrService} from 'ngx-toastr';
import { Product } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = []
  loading: boolean = false;

  constructor (private _productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {    
    this.getListProduct();
  }

  getListProduct(){
    this.loading = true;
    this._productService.getListProduct().subscribe((data: Product[]) => {
      this.listProducts = data;
      this.loading = false;
    })
  }

  deleteProduct(id: number){    
    this.loading = true;
    this._productService.deleteProduct(id).subscribe(data => {              
      this.getListProduct();
      this.toastr.warning('El Producto fu Eliminado con Exito', 'Producto Eliminado');
        
      })
  }

}
