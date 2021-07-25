import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  list: any[] = [];

  constructor(private carService:CarService) { }

  ngOnInit(): void {
   this.list = this.carService.getCarList();
  }

}
