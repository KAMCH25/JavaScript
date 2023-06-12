import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ContadorcliComponent } from './contadorcli/contadorcli.component';
import { IterpolacionComponent } from './iterpolacion/iterpolacion.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formulario3Component } from './formulario3/formulario3.component'; /* para los formulario 2  */

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ContadorcliComponent,
    IterpolacionComponent,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    Formulario2Component,
    Formulario3Component    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule  /* formulario reactivos  */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
