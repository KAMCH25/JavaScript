import { Component } from '@angular/core';
import { Persona } from '../personas';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {
  
  personas: Persona[]= [
    {nombre: 'Juan', edad: 20},
    {nombre: 'Ana', edad: 23},
    {nombre: 'Luis', edad: 45},
    {nombre: 'Maria', edad: 32},
  ]
}
