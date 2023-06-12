import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  confirmpassword: string = '';

  constructor(){
  }

  ngOnInit(): void {
  }

  addUser() {
    //Vaidamos que el Usuario Ingrese Valores
    if(this.username == '' || this.password == '' || this.confirmpassword == ''){
      alert('Todos los Campo son Obligatorios')
      return; // Corta hilo de Ejecucion 
    }

    
  }

}
