import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  templateUrl: './padre-deportes.component.html',
  styleUrl: './padre-deportes.component.css'
})
export class PadreDeportesComponent {
  public deportes: Array<string>
  public mensaje!: string

  constructor(){
    this.deportes = ["Baseball ⚾", "Futbol ⚽", "Petanca 🪩", "Basket 🏀"]

  }

  seleccionarFavorito(event: any):void{
    console.log("⭐Dato: " + event)
    this.mensaje = "⭐ FAVORITO: " + event + " ⭐"
  }

}
