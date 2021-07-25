import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../interfaces/Producto';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.css']
})
export class CardCarComponent implements OnInit {

  public producto: Producto = {
    id: 0,
    nombre: '',
    proveedor: '',
    precio: 0,
    disponible: false,
    img: '',
  };
  carro: string = '';

  @Input() id: number = 0;
  @Input() img: string = '';
  @Input() nombre: string = '';
  @Input() marca: string = '';
  @Input() precio: number = 0;
  @Input() disponible:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public generataRandom(min:number, max:number){
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
