import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


import { Producto } from '../../interfaces/Producto';
import { CarService } from '../../services/car.service';

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

  @Output() length: EventEmitter<string> = new EventEmitter();

  constructor(private carService:CarService) { }


  ngOnInit(): void {
  }



  public delete(id:number){
    this.carService.deleteProduct(id)
    this.carService.carInfo.emit(this.carService.getLength())
    this.carService.print()
    this.emitir();
  }

  emitir(){
    this.length.emit("recargar")
  }

}
