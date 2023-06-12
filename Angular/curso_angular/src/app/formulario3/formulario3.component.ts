import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {

  get name () {
    return this.formUser.get('name') as FormControl; 
  }

  formUser = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email])
  });

  procesar(){
    console.log(this.formUser.value);
  }
/* 
  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
 */
}
