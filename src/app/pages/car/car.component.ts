import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  list: any[] = [];
  isVoid:boolean= false;
  total = 0;

  constructor(private carService:CarService) { }

  ngOnInit(): void {
   this.list = this.carService.getCarList();
   this.isvoidCar();
   this.total = 0;
  }



  isvoidCar(){
    console.log(this.list.length )
    this.list.length ===0 ? this.isVoid=true:this.isVoid=false;
  }

  recibirRespuesta(respuesta:string){
    console.log(respuesta)

    this.isvoidCar();
  }

  calcularTotal(){
   return this.carService.calcularTotal()
  }

}

 

