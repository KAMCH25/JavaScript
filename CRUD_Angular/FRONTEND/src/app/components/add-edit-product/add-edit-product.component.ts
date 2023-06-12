import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit{
  form: FormGroup;
  loading: boolean = false;
  id: number; 
  operacion: string = 'Agregar ';


  constructor (private fb: FormBuilder,
    private _produtService: ProductService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute){   
    this.form = this.fb.group({
      name:['', Validators.required],
      description:['', Validators.required],
      price:[null, Validators.required],
      stock:[null, Validators.required]
    }) 
    this.id = Number(aRouter.snapshot.paramMap.get('id'));    
    
  }

  ngOnInit(): void {    
    if(this.id != 0){
      this.operacion = 'Editar ';
      this.getProduct(this.id);
    }
  }

  getProduct(id: Number){
    this.loading = true;
    this._produtService.getProduct(id).subscribe((data: Product) => {
      console.log(data);
      this.loading = false;
      this.form.setValue({
          name: data.name,
          description: data.description,
          price: data.price,
          stock: data.stock,
      })
    })
  }

  addProduct() {
    /* console.log(this.form.value.name);
    console.log(this.form.get('name')?.value); */
    
    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock
    } 
    
    this.loading = true;

    if(this.id !== 0 ) {
      /* Es Editar */
      product.id = this.id;
      this._produtService.uptadeProduct(this.id, product).subscribe( () => {
        this.loading = false;
        this.toastr.info(`El Producto ${product.name} fue Actualizado con Exito`, 'Producto Actualizado');
        this.router.navigate(['/']);
      })
    }else{ 
      /* Es Agregar */
      this._produtService.saveProduct(product).subscribe(() => {
      this.loading = false;
      this.toastr.success(`El Producto ${product.name} Fue Registrado con Exito`, 'Producto Registrado')
      this.router.navigate(['/']);      
    })
    }
    
    

  }

}
