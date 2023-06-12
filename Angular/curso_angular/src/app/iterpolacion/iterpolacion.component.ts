import { Component } from '@angular/core';

@Component({
  selector: 'app-iterpolacion',
  templateUrl: './iterpolacion.component.html',
  styleUrls: ['./iterpolacion.component.css']
})
export class IterpolacionComponent {
 
  nombre = 'Kevin Andres Martinez';

    numero: number = 1;  // definimos variable con tipado 

  decremento (){   // definimos un Metodo 
    this.numero--;
  }

  incremento (){
    this.numero++;
  }
}
