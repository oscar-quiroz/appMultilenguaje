import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Producto } from '../../interfaces/Producto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public producto:Producto ={
    id:0,
    nombre:"",
    proveedor:"",
    precio: 0,
    disponible : false,
    img : ""
  }
  carro:string="";

  @Input()img:string ="";
  @Input()nombre:string ="";
  @Input()marca:string="";

  public car:string = "assets/carrito1.png"

  constructor( private carService:CarService ,private router:Router) { }

  ngOnInit(): void {
  }


  addCar(){
    if(this.car==="assets/carrito1.png"){
      this.car="assets/carrito2.png"
      this.producto ={
        id:2,
        nombre:this.nombre,
        proveedor:this.marca,
        precio:20,
        disponible: true,
        img: this.img
      }
        this.carService.addProduct(this.producto)
        this.carService.print()
    }else{
      this.car="assets/carrito1.png"
      this.carService.deleteProduct(this.producto.id)
      this.carService.print()
    }
  }

  buy(){
    console.log("compraqrr")
    this.router.navigateByUrl("/buy")

  }
}
