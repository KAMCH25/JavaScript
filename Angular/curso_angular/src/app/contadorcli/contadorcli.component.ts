import { style } from '@angular/animations';
import { Component } from '@angular/core'; /* decorador */

@Component({
  selector: 'app-contadorcli',  /* valor utilizado para llamar a los componentes */
  templateUrl: './contadorcli.component.html', 
  /* template: `
    <h1>Curso de Angular </h1>  //  para definir los estildos directamente en el componete
  `  */
  styleUrls: ['./contadorcli.component.css']

/*   styles: [`
  
    h1{        // definimos los estilos directamente en el componente no llamalos el archovi css 
      color: red;
    }
  `] */
})
export class ContadorcliComponent {
}
