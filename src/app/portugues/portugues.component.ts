import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portugues',
  templateUrl: './portugues.component.html',
  styleUrls: ['./portugues.component.scss'],
})
export class PortuguesComponent implements OnInit {

  @Input() tema:string;
  numeros:Array<any> =  [ 
  {numero: 1 , imagen: './../../assets/temas/numeros/1.png', sonido: './../../assets/temas/numeros/y2mate.com - Cantando los Números  Canciones y Clásicos Infantiles.mp3'},
  {numero: 2 , imagen: './../../assets/temas/numeros/2.png', sonido: './../../assets/temas/numeros/y2mate.com - Cantando los Números  Canciones y Clásicos Infantiles.mp3'},
  {numero: 3 , imagen: './../../assets/temas/numeros/3.png', sonido: './../../assets/temas/numeros/y2mate.com - Cantando los Números  Canciones y Clásicos Infantiles.mp3'},
  {numero: 4 , imagen: './../../assets/temas/numeros/4.png', sonido: './../../assets/temas/numeros/y2mate.com - Cantando los Números  Canciones y Clásicos Infantiles.mp3'},
  {numero: 5 , imagen: './../../assets/temas/numeros/5.png', sonido: './../../assets/temas/numeros/y2mate.com - Cantando los Números  Canciones y Clásicos Infantiles.mp3'} 
]

colores:Array<any> =  [ 
  {color: 'ROJO' , imagen: './../../assets/temas/colores/tarjeta-roja.png', sonido: './../../assets/temas/numeros/y2mate.com - Cantando los Números  Canciones y Clásicos Infantiles.mp3'},
  {color: 'AZUL' , imagen: './../../assets/temas/colores/tarjeta-azul.png', sonido: './../../assets/temas/numeros/y2mate.com - Cantando los Números  Canciones y Clásicos Infantiles.mp3'},
  {color: '' , imagen: './../../assets/temas/colores/3.png', sonido: './../../assets/temas/numeros/y2mate.com - Cantando los Números  Canciones y Clásicos Infantiles.mp3'},
  {color: '' , imagen: './../../assets/temas/colores/4.png', sonido: './../../assets/temas/numeros/y2mate.com - Cantando los Números  Canciones y Clásicos Infantiles.mp3'},
  {color: '' , imagen: './../../assets/temas/colores/5.png', sonido: './../../assets/temas/numeros/y2mate.com - Cantando los Números  Canciones y Clásicos Infantiles.mp3'} 
]

animales:Array<any> =  [ 
  {animal: 'LEON' , imagen: './../../assets/temas/animales/leon.png', sonido: './../../assets/temas/numeros/y2mate.com - Cantando los Números  Canciones y Clásicos Infantiles.mp3'},
  {animal: 'VACA' , imagen: './../../assets/temas/animales/vaca.png', sonido: './../../assets/temas/numeros/y2mate.com - Cantando los Números  Canciones y Clásicos Infantiles.mp3'},
  {animal: 'PERRO' , imagen: './../../assets/temas/animales/perro.png', sonido: './../../assets/temas/numeros/y2mate.com - Cantando los Números  Canciones y Clásicos Infantiles.mp3'},
  {animal: 'GATO' , imagen: './../../assets/temas/animales/gato.png', sonido: './../../assets/temas/numeros/y2mate.com - Cantando los Números  Canciones y Clásicos Infantiles.mp3'},
  {animal: 'CABALLO' , imagen: './../../assets/temas/animales/caballo.png', sonido: './../../assets/temas/numeros/y2mate.com - Cantando los Números  Canciones y Clásicos Infantiles.mp3'} 
]
  constructor() { }

  ngOnInit() {}

}
