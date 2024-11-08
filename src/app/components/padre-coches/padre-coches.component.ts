import { Component } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padre-coches',
  templateUrl: './padre-coches.component.html',
  styleUrl: './padre-coches.component.css'
})
export class PadreCochesComponent {

  public coches: Array<Coche>

  constructor(){

    this.coches = [
      {
        marca: "Ferrari",
        modelo: "A1",
        velocidad: 280,
        aceleracion: 20,
        estado: false
      },
      {
        marca: "Lamborghini",
        modelo: "Diablo",
        velocidad: 777,
        aceleracion: 69,
        estado: false
      },
      {
        marca: "BMW",
        modelo: "McQueen",
        velocidad: 365,
        aceleracion: 27,
        estado: false
      },
    ]
  }


}
